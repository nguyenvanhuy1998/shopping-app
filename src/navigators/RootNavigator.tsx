import React from "react";
import {
    NativeStackScreenProps,
    createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";
import { Detail } from "../screens";

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    Detail: {
        id: string;
    };
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
export type RootStackScreenProps<T extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, T>;
const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <RootStack.Screen name="TabsStack" component={TabsNavigator} />
            <RootStack.Screen name="Detail" component={Detail} />
        </RootStack.Navigator>
    );
};

export default RootNavigator;
