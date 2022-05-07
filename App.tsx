import "react-native-gesture-handler";
import React, { useCallback, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components/native";
import { AppRoutes } from "./src/routes/app.routes";

import {
  useFonts,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
} from "@expo-google-fonts/kanit";
import DarkTheme from "./src/global/styles/DarkTheme";

import { LogBox, View } from "react-native";

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const { BIG_APP_NAME } = process.env;
const { BIG_APP_VERSION } = process.env;
const { BIG_APP_STRING } = process.env;

export default function App() {
  console.log({
    app_name: BIG_APP_NAME,
    version: BIG_APP_VERSION,
    message: BIG_APP_STRING,
  });

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_400Regular_Italic,
    Kanit_800ExtraBold,
    Kanit_800ExtraBold_Italic,
  });

  //TODO: fix splash screen
  if (!fontsLoaded) return <View></View>;

  return (
    <ThemeProvider theme={DarkTheme}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
