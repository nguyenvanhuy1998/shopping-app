import { View } from "react-native";
import React from "react";
import {
    BottomTabScreenProps,
    createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import Icons from "@expo/vector-icons/MaterialIcons";
import { Cart, Home, Payment, Profile } from "../screens";
import { CompositeScreenProps } from "@react-navigation/native";
import { RootStackScreenProps } from "./RootNavigator";

export type TabsStackParamList = {
    Home: undefined;
    Cart: undefined;
    Payment: undefined;
    Profile: undefined;
};
const TabsStack = createBottomTabNavigator<TabsStackParamList>();
export type TabsStackScreenProps<T extends keyof TabsStackParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<TabsStackParamList, T>,
        RootStackScreenProps<"TabsStack">
    >;

const TabsNavigator = () => {
    return (
        <TabsStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <TabsStack.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon(props) {
                        return <Icons name="home" {...props} />;
                    },
                }}
            />
            <TabsStack.Screen
                name="Cart"
                component={Cart}
                options={{
                    tabBarIcon(props) {
                        return <Icons name="shopping-cart" {...props} />;
                    },
                }}
            />
            <TabsStack.Screen
                name="Payment"
                component={Payment}
                options={{
                    tabBarIcon(props) {
                        return (
                            <Icons name="account-balance-wallet" {...props} />
                        );
                    },
                }}
            />
            <TabsStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon(props) {
                        return <Icons name="person" {...props} />;
                    },
                }}
            />
        </TabsStack.Navigator>
    );
};

export default TabsNavigator;
