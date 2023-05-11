import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
    NavigationContainer,
    Theme,
    DefaultTheme,
} from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import { useMemo } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    const theme: Theme = useMemo(
        () => ({
            ...DefaultTheme,
            colors: {
                ...DefaultTheme.colors,
                background: "#f5f5f5",
                text: "#191919",
                border: "#D9D9D9",
                primary: "#191919",
            },
        }),
        []
    );
    return (
        <SafeAreaProvider style={styles.container}>
            <GestureHandlerRootView style={styles.container}>
                <NavigationContainer theme={theme}>
                    <BottomSheetModalProvider>
                        <RootNavigator />
                    </BottomSheetModalProvider>
                    <StatusBar style="auto" />
                </NavigationContainer>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
