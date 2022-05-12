import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ThemeScreen from "../screens/ThemeScreen";
import Login from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="ThemeScreen" component={Login} />
    </Navigator>
  );
}
