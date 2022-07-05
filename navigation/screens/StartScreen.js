import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StartScreen({ navigation }) {
  const initialise = async () => {
    const tempChanges = await AsyncStorage.getItem("Changes");
    if (tempChanges === null) {
      tempJSON = JSON.stringify([]);
      await AsyncStorage.setItem("Changes", tempJSON);
      await AsyncStorage.setItem("Change Dates", tempJSON);
      await AsyncStorage.setItem("Reasons", tempJSON);
      await AsyncStorage.setItem("Debt Names", tempJSON);
      await AsyncStorage.setItem("Debt Amounts", tempJSON);
      console.log("Initialisation done at Start");
    }
  };

  useEffect(() => {
    initialise();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Image
        style={{
          flex: 1,
          resizeMode: "center",
          marginBottom: -70,
        }}
        source={require("../images/Logo.jpg")}
      />
      <Image
        style={{ resizeMode: "center", flex: 2 }}
        source={require("../images/Photo.jpg")}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.title}> Laundry Calculator Application</Text>
        <Text style={styles.regular}> Press Calculator to start</Text>
        <Text style={styles.regular}> Press Balance to check earnings</Text>
        <Text style={styles.regular}> 按计算器开始</Text>
        <Text style={styles.regular}> 按钱查看收入</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
  },

  regular: {
    fontSize: 20,
    textAlign: "center",
  },
});
