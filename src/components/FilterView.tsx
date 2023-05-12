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
import PriceRangeSelector from "./PriceRangeSelector";

const FilterView = () => {
    const { colors } = useTheme();
    const [startPrice, setStartPrice] = useState(50);
    const [endPrice, setEndPrice] = useState(250);
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.flexOne}>
            <ScrollView style={styles.flexOne}>
                <View style={styles.bodyWrap}>
                    {/* Title Filter */}
                    <View style={styles.viewTitleFilter}>
                        <Text
                            style={{
                                ...styles.titleFilter,
                                color: colors.text,
                            }}
                        >
                            Filters
                        </Text>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    color: colors.text,
                                    opacity: 0.5,
                                }}
                            >
                                Reset
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {/* Range Selector */}
                    <PriceRangeSelector
                        minPrice={0}
                        maxPrice={dummyData.MAX_PRICE}
                        startPrice={startPrice}
                        endPrice={endPrice}
                        onStartPriceChange={setStartPrice}
                        onEndPriceChange={setEndPrice}
                    />
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

    // Sport
    sportCategory: {
        paddingHorizontal: 24,
        marginTop: 16,
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
