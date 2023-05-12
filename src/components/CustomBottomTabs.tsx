import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
const CustomBottomTabs = (props: BottomTabBarProps) => {
    const { colors } = useTheme();
    return (
        <SafeAreaView edges={["bottom"]}>
            <View style={styles.viewRow}>
                {props.state.routes.map((route, i) => {
                    const isActive = i === props.state.index;
                    return (
                        <Pressable
                            key={i}
                            onPress={() =>
                                props.navigation.navigate(route.name)
                            }
                            style={styles.btn}
                        >
                            <View
                                style={{
                                    ...styles.viewIcon,
                                    backgroundColor: isActive
                                        ? colors.primary
                                        : "transparent",
                                }}
                            >
                                <Icons
                                    name={
                                        route.name === "Home"
                                            ? "home"
                                            : route.name === "Cart"
                                            ? "shopping-cart"
                                            : route.name === "Payment"
                                            ? "account-balance-wallet"
                                            : "person"
                                    }
                                    size={24}
                                    color={isActive ? colors.card : colors.text}
                                    style={{
                                        opacity: isActive ? 1 : 0.5,
                                    }}
                                />
                            </View>
                            {isActive && (
                                <Text
                                    style={{
                                        ...styles.name,
                                        color: colors.text,
                                    }}
                                >
                                    {route.name}
                                </Text>
                            )}
                        </Pressable>
                    );
                })}
            </View>
        </SafeAreaView>
    );
};

export default CustomBottomTabs;

const styles = StyleSheet.create({
    viewRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingVertical: 8,
    },
    viewIcon: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
    },
    name: {
        marginLeft: 4,
        fontSize: 14,
        fontWeight: "600",
    },
});
