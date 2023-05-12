import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "@react-navigation/native";
import {
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
} from "react-native-reanimated";

const PriceRangeSelector = ({
    minPrice,
    maxPrice,
    startPrice,
    endPrice,
    onStartPriceChange,
    onEndPriceChange,
}: {
    minPrice: number;
    maxPrice: number;
    startPrice: number;
    endPrice: number;
    onStartPriceChange: (value: number) => void;
    onEndPriceChange: (value: number) => void;
}) => {
    const { colors } = useTheme();
    const [barWidth, setBarWidth] = useState(0);
    const leftHandlePos = useSharedValue(0);
    const rightHandlePos = useSharedValue(0);
    const leftHandleGesture = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        {
            prevPos: number;
        }
    >({
        onStart(event, context) {
            context.prevPos = leftHandlePos.value;
        },
        onActive(event, context) {
            leftHandlePos.value = Math.min(
                rightHandlePos.value,
                Math.max(0, context.prevPos + event.translationX)
            );
            runOnJS(onStartPriceChange)(
                Math.round((maxPrice / barWidth) * leftHandlePos.value)
            );
        },
    });
    const rightHandleGesture = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        {
            prevPos: number;
        }
    >({
        onStart(event, context) {
            context.prevPos = rightHandlePos.value;
        },
        onActive(event, context) {
            rightHandlePos.value = Math.min(
                barWidth,
                Math.max(
                    leftHandlePos.value,
                    context.prevPos + event.translationX
                )
            );
            runOnJS(onEndPriceChange)(
                Math.round((maxPrice / barWidth) * rightHandlePos.value)
            );
        },
    });
    const leftHandleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: leftHandlePos.value,
            },
        ],
    }));
    const rightHandleStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: rightHandlePos.value,
            },
        ],
    }));
    const barHighlightStyle = useAnimatedStyle(() => ({
        left: leftHandlePos.value,
        right: barWidth - rightHandlePos.value,
    }));
    const charts = useMemo(
        () => (
            <View style={styles.viewChart}>
                {new Array(Math.round(maxPrice / 50)).fill("").map((_, i) => {
                    const randomValue = Math.random();
                    return (
                        <View
                            key={i}
                            style={{
                                ...styles.itemChart,
                                height: Math.round(Math.random() * 40) + 8,
                                opacity: Math.max(
                                    0.2,
                                    Math.min(0.5, randomValue)
                                ),
                            }}
                        />
                    );
                })}
            </View>
        ),
        []
    );
    useEffect(() => {
        if (barWidth === 0) return;
        leftHandlePos.value = (startPrice * barWidth) / maxPrice;
        rightHandlePos.value = (endPrice * barWidth) / maxPrice;
    }, [barWidth]);

    return (
        <View style={styles.viewRange}>
            <Text
                style={{
                    color: colors.text,
                }}
            >
                Price Range
            </Text>
            {charts}
            <View style={styles.viewFullSlide}>
                <View
                    style={{
                        ...styles.bottomLine,
                        backgroundColor: colors.border,
                    }}
                    onLayout={(event) => {
                        setBarWidth(event.nativeEvent.layout.width);
                    }}
                >
                    <Animated.View
                        style={[
                            barHighlightStyle,
                            {
                                ...styles.topLine,
                            },
                        ]}
                    />
                    <PanGestureHandler onGestureEvent={leftHandleGesture}>
                        <Animated.View
                            style={[leftHandleStyle, styles.sliderLeft]}
                        >
                            <View
                                style={{
                                    ...styles.hideViewChartLeft,
                                    backgroundColor: colors.card,
                                }}
                            />
                            <SliderHandle label={`$${startPrice}`} />
                        </Animated.View>
                    </PanGestureHandler>
                    <PanGestureHandler onGestureEvent={rightHandleGesture}>
                        <Animated.View
                            style={[rightHandleStyle, styles.sliderRight]}
                        >
                            <View
                                style={{
                                    ...styles.hideViewChartRight,
                                    backgroundColor: colors.card,
                                }}
                            />
                            <SliderHandle label={`$${endPrice}`} />
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </View>
        </View>
    );
};

export default PriceRangeSelector;

const SliderHandle = ({ label }: { label: string }) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                ...styles.circle,
                backgroundColor: colors.background,
            }}
        >
            <View
                style={{
                    ...styles.dotted,
                }}
            />
            <View style={styles.viewLabel}>
                <View style={{ backgroundColor: colors.card }}>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: colors.text,
                        }}
                    >
                        {label}
                    </Text>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    // Range selector
    viewRange: {
        paddingHorizontal: 24,
    },
    viewChart: { flexDirection: "row", alignItems: "flex-end", marginTop: 24 },
    itemChart: { flex: 1, backgroundColor: "#3B82F6" },
    viewFullSlide: {},
    bottomLine: {
        height: 1,
        width: "100%",
        position: "relative",
    },
    topLine: {
        position: "absolute",
        height: "100%",
        backgroundColor: "#3B82F6",
    },
    circle: {
        position: "relative",
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderWidth: 2,
        transform: [{ translateX: -12 }, { translateY: -12 }],
        borderColor: "#3B82F6",
    },
    dotted: {
        width: 3,
        height: 3,
        borderRadius: 10,
        backgroundColor: "#3B82F6",
    },
    sliderLeft: {
        position: "absolute",
        zIndex: 10,
    },
    sliderRight: {
        position: "absolute",
        zIndex: 10,
    },
    viewMinMaxPrice: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 12,
    },
    priceMin: {
        opacity: 0.5,
        position: "absolute",
        top: 14,
        left: 0,
    },
    priceMax: {
        opacity: 0.5,
        position: "absolute",
        top: 14,
        right: 0,
    },
    viewLabel: {
        position: "absolute",
        top: 24,
        width: 200,
        alignItems: "center",
        zIndex: 10,
    },
    label: {},
    hideViewChartLeft: {
        width: 1000,
        position: "absolute",
        right: 12,
        height: 48,
        bottom: 24,
    },
    hideViewChartRight: {
        width: 1000,
        position: "absolute",
        left: -12,
        height: 48,
        bottom: 24,
    },
});
