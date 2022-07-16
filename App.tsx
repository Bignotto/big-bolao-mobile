import "react-native-gesture-handler";
import "react-native-url-polyfill/auto";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { LogBox, View } from "react-native";
import { AuthProvider } from "./src/shared/hooks/AuthContext";
import { Routes } from "./src/routes";

import {
  useFonts,
  Kanit_400Regular,
  Kanit_400Regular_Italic,
  Kanit_500Medium,
  Kanit_500Medium_Italic,
  Kanit_700Bold,
  Kanit_700Bold_Italic,
  Kanit_800ExtraBold,
  Kanit_800ExtraBold_Italic,
} from "@expo-google-fonts/kanit";
import DarkTheme from "./src/global/styles/DarkTheme";

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
    Kanit_500Medium,
    Kanit_500Medium_Italic,
    Kanit_700Bold,
    Kanit_700Bold_Italic,
    Kanit_800ExtraBold,
    Kanit_800ExtraBold_Italic,
  });

  //TODO: fix splash screen
  if (!fontsLoaded) return <View></View>;

  return (
    <ThemeProvider theme={DarkTheme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
