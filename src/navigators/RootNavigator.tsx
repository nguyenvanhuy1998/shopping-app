import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams } from "@react-navigation/native";
import TabsNavigator, { TabsStackParamList } from "./TabsNavigator";
import { Detail } from "../screens";

export type RootStackParamList = {
    TabsStack: NavigatorScreenParams<TabsStackParamList>;
    Detail: undefined;
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
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
