import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/Login";

const { Navigator, Screen } = createStackNavigator();

export function SigninRoutes() {
  return (
    <Navigator>
      <Screen name="Logged Screen" component={Login} />
    </Navigator>
  );
}
