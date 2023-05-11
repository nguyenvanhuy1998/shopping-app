import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React, { ReactNode, useState } from "react";
import { dummyData } from "../constants";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const FilterView = () => {
    const { colors } = useTheme();
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(250);
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.flexOne}>
            <ScrollView style={styles.flexOne}>
                <View style={styles.bodyWrap}>
                    {/* Title Filter */}
                    <View style={styles.viewTitleFilter}>
                        <Text style={styles.titleFilter}>Filters</Text>
                        <TouchableOpacity>
                            <Text>Reset</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Range Selector */}
                    <View style={styles.viewRange}>
                        <Text>Price Range</Text>
                        <View style={styles.viewFullSlide}>
                            <View
                                style={{
                                    ...styles.bottomLine,
                                    backgroundColor: colors.border,
                                }}
                            >
                                <View
                                    style={{
                                        ...styles.topLine,
                                        left: `${
                                            (100 * minPrice) /
                                            dummyData.MAX_PRICE
                                        }%`,
                                        width: `${
                                            (100 * (maxPrice - minPrice)) /
                                            dummyData.MAX_PRICE
                                        }%`,
                                        backgroundColor: colors.primary,
                                    }}
                                />
                                <View style={styles.sliderLeft}>
                                    <SliderHandle />
                                </View>
                                <View style={styles.sliderRight}>
                                    <SliderHandle />
                                </View>
                            </View>
                        </View>
                        <View style={styles.viewMinMaxPrice}>
                            <Text
                                style={{
                                    ...styles.priceMin,
                                    color: colors.text,
                                }}
                            >
                                $0
                            </Text>
                            <Text
                                style={{
                                    ...styles.priceMax,
                                    color: colors.text,
                                }}
                            >
                                ${dummyData.MAX_PRICE}
                            </Text>
                        </View>
                    </View>

                    {/* Sports Category Filter */}
                    <View style={styles.sportCategory}>
                        <Text style={styles.sportCategoryTitle}>Sports</Text>
                        <View style={styles.sportCategoryBody}>
                            {new Array(7).fill("").map((_, i) => {
                                return (
                                    <Chip
                                        key={i}
                                        isSelected={i === 0}
                                        itemCount={i}
                                        label="Item"
                                    />
                                );
                            })}
                        </View>
                    </View>
                    {/* Color Filter */}
                    <View style={styles.colorCategory}>
                        <Text style={styles.colorCategoryTitle}>Color</Text>
                        <View style={styles.colorCategoryBody}>
                            {dummyData.COLORS.map((item, i) => {
                                return (
                                    <Chip
                                        key={i}
                                        isSelected={i === 0}
                                        itemCount={item.itemCount}
                                        label={item.label}
                                        left={
                                            <View
                                                style={{
                                                    ...styles.left,
                                                    backgroundColor: item.color,
                                                }}
                                            />
                                        }
                                    />
                                );
                            })}
                        </View>
                    </View>
                    {/* Sleeves Filter */}
                    <View style={styles.sleevesCategory}>
                        <Text style={styles.sleevesCategoryTitle}>Sleeves</Text>
                        <View style={styles.sleevesCategoryBody}>
                            {dummyData.SLEEVES.map((item, i) => {
                                return (
                                    <Chip
                                        key={i}
                                        isSelected={i === 0}
                                        itemCount={item.itemCount}
                                        label={item.label}
                                    />
                                );
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* Button Apply Filters */}
            <View
                style={{
                    ...styles.containerApplyFilter,
                    paddingBottom: 24 + insets.bottom,
                }}
            >
                <TouchableOpacity
                    style={{
                        ...styles.actionApplyFilter,
                        backgroundColor: colors.primary,
                    }}
                >
                    <Text
                        style={{
                            ...styles.actionApplyFilterTitle,
                            color: colors.background,
                        }}
                    >
                        Apply filters
                    </Text>
                    <View
                        style={{
                            ...styles.actionApplyFilterIcon,
                            backgroundColor: colors.card,
                        }}
                    >
                        <Icons
                            name="arrow-forward"
                            size={24}
                            color={colors.text}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default FilterView;

const SliderHandle = () => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                ...styles.circle,
                borderColor: colors.primary,
                backgroundColor: colors.background,
            }}
        >
            <View
                style={{
                    ...styles.dotted,
                    backgroundColor: colors.primary,
                }}
            />
        </View>
    );
};
const Chip = ({
    isSelected,
    label,
    itemCount,
    left,
}: {
    isSelected: boolean;
    label: string;
    itemCount: number;
    left?: ReactNode;
}) => {
    const { colors } = useTheme();
    return (
        <View
            style={{
                ...styles.chip,
                backgroundColor: isSelected ? colors.text : colors.background,
            }}
        >
            {!!left && <View>{left}</View>}
            <Text
                style={{
                    ...styles.labelChip,
                    color: isSelected ? colors.background : colors.text,
                }}
            >
                {label} [{itemCount}]
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    // Common
    flexOne: {
        flex: 1,
    },
    bodyWrap: {
        paddingVertical: 24,
        gap: 24,
    },
    //Title Filter
    viewTitleFilter: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 24,
    },
    titleFilter: {
        flex: 1,
        fontSize: 20,
        fontWeight: "700",
    },

    // Range selector
    viewRange: {
        paddingHorizontal: 24,
    },
    viewFullSlide: {
        marginTop: 24,
    },
    bottomLine: {
        height: 1,
        width: "100%",
        position: "relative",
    },
    topLine: {
        position: "absolute",
        height: "100%",
    },
    circle: {
        position: "absolute",
        height: 24,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
        borderWidth: 2,
        transform: [{ translateX: -12 }, { translateY: -12 }],
    },
    dotted: {
        width: 3,
        height: 3,
        borderRadius: 10,
    },
    sliderLeft: {
        position: "absolute",
        left: "10%",
    },
    sliderRight: {
        position: "absolute",
        left: "50%",
    },
    viewMinMaxPrice: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 12,
    },
    priceMin: {
        opacity: 0.5,
    },
    priceMax: {
        opacity: 0.5,
    },
    // Sport
    sportCategory: {
        paddingHorizontal: 24,
    },
    sportCategoryTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 12,
    },
    sportCategoryBody: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    chip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 100,
        flexDirection: "row",
        alignItems: "center",
    },
    left: {
        width: 16,
        height: 16,
        borderRadius: 8,
        marginRight: 8,
    },
    labelChip: {
        fontSize: 14,
    },
    // Color Filter
    colorCategory: {
        paddingHorizontal: 24,
    },
    colorCategoryTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    colorCategoryBody: {
        marginTop: 12,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    // Sleeves
    sleevesCategory: {
        paddingHorizontal: 24,
    },
    sleevesCategoryTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    sleevesCategoryBody: {
        marginTop: 12,
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
    },
    // Action Apply Filter
    containerApplyFilter: {
        padding: 24,
    },
    actionApplyFilter: {
        height: 64,
        borderRadius: 64,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    actionApplyFilterTitle: {
        fontSize: 16,
        fontWeight: "600",
    },
    actionApplyFilterIcon: {
        width: 40,
        aspectRatio: 1,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 12,
        right: 12,
        bottom: 12,
    },
});
