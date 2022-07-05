import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//Screens
import StartScreen from "./screens/StartScreen";
import CalculatorContainer from "./CalculatorContainer";
import BalanceScreen from "./screens/BalanceScreen";
import HistoryScreen from "./screens/HistoryScreen";
import DebtScreen from "./screens/DebtScreen";

//Screen Names
const startName = "Start";
const calculatorName = "Calculator";
const balanceName = "Balance";
const historyName = "History";
const debtName = "Debt";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={{ startName }}
        screenOptions={({ route }) => ({
          headerShown: "false",
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
            fontWeight: "bold",
          },
          tabBarStyle: { padding: 10, height: 75 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            size = 30;

            if (rn == calculatorName) {
              iconName = focused ? "calculator" : "calculator-outline";
            } else if (rn == balanceName) {
              iconName = focused ? "cash" : "cash-outline";
            } else if (rn == historyName) {
              iconName = focused ? "list" : "list-outline";
            } else if (rn == debtName) {
              iconName = focused ? "wallet" : "wallet-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name={startName}
          component={StartScreen}
          options={{ headerShown: false, tabBarButton: (props) => null }}
        />
        <Tab.Screen
          name={calculatorName}
          component={CalculatorContainer}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name={balanceName}
          component={BalanceScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name={historyName}
          component={HistoryScreen}
          options={{ headerShown: false }}
        />

        <Tab.Screen
          name={debtName}
          component={DebtScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
