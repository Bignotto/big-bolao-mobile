import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from "../screens/Dashboard";
import NewGroup from "../screens/NewGroup";
import FindGroup from "../screens/FindGroup";
import JoinGroup from "../screens/JoinGroup";
import GroupDashboard from "../screens/GroupDashboard";
import GroupProperties from "../screens/GroupProperties";
import GroupPlayerGuesses from "../screens/GroupPlayerGuesses";
import ConfirmationScreen from "../screens/ConfirmationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import ViewGuessesScreen from "../screens/ViewGuessesScreen";
import TodayGuessesScreen from "../screens/TodayGuessesScreen";

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="NewGroup" component={NewGroup} />
      <Screen name="FindGroup" component={FindGroup} />
      <Screen name="JoinGroup" component={JoinGroup} />
      <Screen name="GroupDashboard" component={GroupDashboard} />
      <Screen name="GroupProperties" component={GroupProperties} />
      <Screen name="GroupPlayerGuesses" component={GroupPlayerGuesses} />
      <Screen name="Confirmation" component={ConfirmationScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="ViewGroupGuessesScreen" component={ViewGuessesScreen} />
      <Screen name="TodayGuessesScreen" component={TodayGuessesScreen} />
    </Navigator>
  );
}
