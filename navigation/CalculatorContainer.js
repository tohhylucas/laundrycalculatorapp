import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { StackActions } from "@react-navigation/native";

import CalculatorScreen from "./screens/CalculatorScreen";
import CalculatorScreen2 from "./screens/CalculatorScreen2";
import CalculatorScreen3 from "./screens/CalculatorScreen3";
import CalculatorScreen4 from "./screens/CalculatorScreen4";

const Stack = createStackNavigator();

export default function CalculatorContainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CalculatorScreen"
        component={CalculatorScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalculatorScreen2"
        component={CalculatorScreen2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalculatorScreen3"
        component={CalculatorScreen3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CalculatorScreen4"
        component={CalculatorScreen4}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
