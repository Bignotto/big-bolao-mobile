import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ThemeScreen from "../screens/ThemeScreen";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="Logged in" component={ThemeScreen} />
    </Navigator>
  );
}
