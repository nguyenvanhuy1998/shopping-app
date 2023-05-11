import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { RootStackScreenProps } from "../../navigators/RootNavigator";
import styles from "./styles";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Icons from "@expo/vector-icons/MaterialIcons";
import BottomSheet from "@gorhom/bottom-sheet";
import { useTheme } from "@react-navigation/native";
import { dummyData } from "../../constants";

const Detail = ({
    navigation,
    route: {
        params: { id },
    },
}: RootStackScreenProps<"Detail">) => {
    const inset = useSafeAreaInsets();
    const { colors } = useTheme();
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(dummyData.SIZES[0]);
    const handleBack = () => {
        navigation.goBack();
    };
    const handleDecreaseProduct = () => {
        setCount((count) => Math.max(1, count - 1));
    };
    const handleIncreaseProduct = () => {
        setCount((count) => Math.min(10, count + 1));
    };
    return (
        <View style={styles.flexOne}>
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
                }}
                style={styles.flexOne}
            />
            <SafeAreaView edges={["top"]} style={styles.safeArea}>
                <StatusBar style="light" />
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.btn} onPress={handleBack}>
                        <Icons name="arrow-back" size={24} color={"#fff"} />
                    </TouchableOpacity>
                    <View style={styles.flexOne} />
                    <TouchableOpacity style={styles.btn}>
                        <Icons
                            name="favorite-border"
                            size={24}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Icons
                            name="add-shopping-cart"
                            size={24}
                            color={"#fff"}
                        />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

            {/* Bottom Sheet */}
            <BottomSheet
                detached
                snapPoints={[64, 500]}
                index={0}
                style={styles.bottomSheet}
                bottomInset={inset.bottom + 20}
                backgroundStyle={{
                    ...styles.backgroundBottomSheet,
                    backgroundColor: colors.background,
                }}
                handleIndicatorStyle={{ backgroundColor: colors.primary }}
            >
                {/* Header Bottom Sheet */}
                <View style={styles.bodyBottomSheet}>
                    {/* Product Name */}
                    <Text style={{ ...styles.nameProduct, color: colors.text }}>
                        PUMA Everyday Hussle
                    </Text>
                    {/* Rating && Add/Remove Count Product */}
                    <View style={styles.viewRow}>
                        <View style={styles.flexOne}>
                            <View style={styles.viewRating}>
                                {new Array(5).fill("").map((_, i) => (
                                    <Icons
                                        key={i}
                                        name={i < 3 ? "star" : "star-border"}
                                        color={"#facc15"}
                                        size={20}
                                    />
                                ))}
                            </View>
                            <Text
                                style={{
                                    ...styles.countReviews,
                                    color: colors.text,
                                }}
                            >
                                3.0 (250K Reviews)
                            </Text>
                        </View>
                        {/* Count Product*/}
                        <View
                            style={{
                                ...styles.countProduct,
                                backgroundColor: colors.primary,
                            }}
                        >
                            <TouchableOpacity
                                onPress={handleDecreaseProduct}
                                style={{
                                    ...styles.btnCount,
                                    backgroundColor: colors.card,
                                }}
                            >
                                <Icons
                                    name="remove"
                                    size={20}
                                    color={colors.text}
                                />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    ...styles.count,
                                    color: colors.background,
                                }}
                            >
                                {count}
                            </Text>
                            <TouchableOpacity
                                onPress={handleIncreaseProduct}
                                style={{
                                    ...styles.btnCount,
                                    backgroundColor: colors.card,
                                }}
                            >
                                <Icons
                                    name="add"
                                    size={20}
                                    color={colors.text}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Sizes */}
                    <View>
                        {/* Title Sizes */}
                        <View style={styles.titleSizes}>
                            <Text
                                style={{ ...styles.model, color: colors.text }}
                            >
                                Model is 6'1'', Size M
                            </Text>
                            <Text
                                style={{
                                    ...styles.sizeGuide,
                                    color: colors.text,
                                }}
                            >
                                Size guide
                            </Text>
                        </View>
                        {/* Type Sizes */}
                        <View style={styles.typeSizes}>
                            {dummyData.SIZES.map((item, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSize(item)}
                                    style={{
                                        ...styles.btnItemType,
                                        backgroundColor:
                                            item === size
                                                ? colors.primary
                                                : colors.card,
                                    }}
                                >
                                    <Text
                                        style={{
                                            ...styles.itemType,
                                            color:
                                                item === size
                                                    ? colors.card
                                                    : colors.text,
                                        }}
                                    >
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    {/* Description */}
                    <View>
                        <Text
                            style={{
                                ...styles.titleDescription,
                                color: colors.text,
                            }}
                        >
                            Description
                        </Text>
                        <Text
                            style={{
                                ...styles.subDescription,
                                color: colors.text,
                            }}
                            numberOfLines={3}
                        >
                            Aute magna dolore sint ipsum dolor fugiat. Ad magna
                            ad elit labore culpa sunt sint laboris consectetur
                            sunt. Lorem excepteur occaecat reprehenderit nostrud
                            culpa ad ex exercitation tempor.
                        </Text>
                    </View>
                    {/* Total && Add to cart */}
                    <View style={styles.flexOne} />
                    <View style={styles.footer}>
                        <View style={styles.flexOne}>
                            <Text
                                style={{
                                    ...styles.titleTotal,
                                    color: colors.text,
                                }}
                            >
                                Total
                            </Text>
                            <Text
                                style={{
                                    ...styles.valueTotal,
                                    color: colors.text,
                                }}
                            >
                                ${(25000).toLocaleString()}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                ...styles.btnAddToCart,
                                backgroundColor: colors.primary,
                            }}
                        >
                            <Text
                                style={{
                                    ...styles.titleAddToCart,
                                    color: colors.background,
                                }}
                            >
                                Add to cart
                            </Text>
                            <View
                                style={{
                                    ...styles.iconAddToCart,
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
            </BottomSheet>
        </View>
    );
};

export default Detail;
