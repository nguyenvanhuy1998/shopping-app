import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Card = ({
    price,
    imageUrl,
    onPress,
}: {
    price: number;
    imageUrl: string;
    onPress?: () => void;
}) => {
    return (
        <TouchableOpacity style={styles.cardItem} onPress={onPress}>
            <Image
                source={{
                    uri: imageUrl,
                }}
                style={styles.imageCardItem}
                resizeMode="cover"
            />
            <View style={styles.priceCardItem}>
                <Text style={styles.valuePriceCardItem}>${price}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardItem: {
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
    },
    imageCardItem: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    priceCardItem: {
        position: "absolute",
        left: 12,
        top: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: 100,
    },
    valuePriceCardItem: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
    },
});
