import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

export default function BalanceScreen({ navigation }) {
  var [overallTotal, setoverallTotal] = useState(0);
  var [tempValue, settempValue] = useState(0);
  var [tempReason, settempReason] = useState("");

  const subtract = async () => {
    // Check if there is a value stored in Overall Total, else set as 0 to prevent NaN
    var currentOT = await AsyncStorage.getItem("Overall Total");
    if (currentOT === null) {
      await AsyncStorage.setItem("Overall Total", "0");
    }
    if (tempValue === "") {
      return false;
    }
    try {
      await AsyncStorage.setItem(
        "Overall Total",
        (
          parseFloat(await AsyncStorage.getItem("Overall Total")) -
          parseFloat(tempValue)
        ).toString()
      );

      var currentOT = await AsyncStorage.getItem("Overall Total");

      setoverallTotal(currentOT);
    } catch (err) {
      alert(err);
    }

    // Check if changes list exists in Async, else set it to hold empty list
    var changes = await AsyncStorage.getItem("Changes");

    if (changes === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Changes", tempJSON);
    }

    // Update changes list to hold current change
    if (tempValue !== 0) {
      const changes = JSON.parse(await AsyncStorage.getItem("Changes"));
      changes.push(-tempValue);
      console.log(changes);
      const tempJSON = JSON.stringify(changes);
      await AsyncStorage.setItem("Changes", tempJSON);
      console.log(tempJSON);
    }

    // Check if dateChanges list exists in Async, else set it to hold empty list
    var changeDates = await AsyncStorage.getItem("Change Dates");
    if (changeDates === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Change Dates", tempJSON);
    }

    // Update change dates list to hold current change date
    if (tempValue !== 0) {
      const changeDates = JSON.parse(
        await AsyncStorage.getItem("Change Dates")
      );
      changeDates.push(new Date().toDateString());
      const tempJSON = JSON.stringify(changeDates);
      await AsyncStorage.setItem("Change Dates", tempJSON);
    }
  };

  const add = async () => {
    // Check if there is a value stored in Overall Total, else set as 0 to prevent NaN
    var currentOT = await AsyncStorage.getItem("Overall Total");
    if (currentOT === null) {
      await AsyncStorage.setItem("Overall Total", "0");
    }
    if (tempValue === "") {
      return false;
    }

    try {
      await AsyncStorage.setItem(
        "Overall Total",
        (
          parseFloat(await AsyncStorage.getItem("Overall Total")) +
          parseFloat(tempValue)
        ).toString()
      );

      var currentOT = await AsyncStorage.getItem("Overall Total");

      setoverallTotal(currentOT);
    } catch (err) {
      alert(err);
    }

    // Check if changes list exists in Async, else set it to hold empty list
    var changes = await AsyncStorage.getItem("Changes");
    if (changes === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Changes", tempJSON);
    }

    // Update changes list to hold current change
    if (tempValue !== 0) {
      const changes = JSON.parse(await AsyncStorage.getItem("Changes"));
      changes.push(tempValue);
      const tempJSON = JSON.stringify(changes);
      await AsyncStorage.setItem("Changes", tempJSON);
    }

    // Check if dateChanges list exists in Async, else set it to hold empty list
    var changeDates = await AsyncStorage.getItem("Change Dates");
    if (changeDates === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Change Dates", tempJSON);
    }

    // Update change dates list to hold current change date
    if (tempValue !== 0) {
      const changeDates = JSON.parse(
        await AsyncStorage.getItem("Change Dates")
      );
      changeDates.push(new Date().toDateString());
      const tempJSON = JSON.stringify(changeDates);
      await AsyncStorage.setItem("Change Dates", tempJSON);
    }

    console.log(await AsyncStorage.getItem("Changes"));
  };

  const reason = async () => {
    //Check if reasons list exists
    var reasons = await AsyncStorage.getItem("Reasons");
    if (reasons === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Reasons", tempJSON);
    }

    //Update reasons list
    if (tempValue !== 0) {
      const reasons = JSON.parse(await AsyncStorage.getItem("Reasons"));
      reasons.push(tempReason);
      const tempJSON = JSON.stringify(reasons);
      console.log(tempJSON);
      await AsyncStorage.setItem("Reasons", tempJSON);
    } else if (tempValue === 0) {
      alert("Invalid input");
      return false;
    }
  };

  const setZero = async () => {
    try {
      await AsyncStorage.setItem("Overall Total", "0");
      var currentOT = await AsyncStorage.getItem("Overall Total");

      setoverallTotal(currentOT);
    } catch (err) {
      alert(err);
    }
  };

  const load = async () => {
    try {
      setoverallTotal(await AsyncStorage.getItem("Overall Total"));
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    settempValue(tempValue);
    load();
  });

  return (
    <ScrollView>
      <Text
        style={{
          paddingTop: 50,
          fontWeight: "bold",
          fontSize: 30,
          backgroundColor: "#DCDCDC",
          padding: 20,
        }}
      >
        {" "}
        Balance{" "}
      </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View
        style={{
          flex: 0,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setZero();
          }}
        >
          <Text
            style={{
              backgroundColor: "purple",
              fontSize: 50,
              marginBottom: 20,
              borderRadius: 20,
            }}
          >
            {" "}
            重置{" "}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 50,
            backgroundColor: "chartreuse",
            padding: 20,
            fontWeight: "bold",
          }}
        >
          {parseFloat(overallTotal).toFixed(2)}
        </Text>

        <TextInput
          placeholder="Amount"
          style={{
            backgroundColor: "white",
            marginTop: 20,
            fontSize: 30,
            padding: 20,
            margin: 20,
            textAlign: "left",
            height: 100,
            width: 200,
          }}
          keyboardType="numeric"
          onChangeText={(tempValue) => settempValue(parseFloat(tempValue))}
        />

        <TextInput
          placeholder="Reason"
          style={{
            backgroundColor: "white",
            marginTop: 20,
            fontSize: 30,
            padding: 20,
            margin: 20,
            textAlign: "left",
            height: 100,
            width: 200,
          }}
          keyboardType="default"
          onChangeText={(tempReason) => settempReason(tempReason)}
        ></TextInput>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            console.log(tempValue);
            add();
            reason();
          }}
        >
          <Text
            style={{
              backgroundColor: "green",
              fontSize: 50,
              marginRight: 30,
              borderRadius: 20,
            }}
          >
            {" "}
            加{" "}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            subtract();
            reason();
          }}
        >
          <Text
            style={{ backgroundColor: "red", fontSize: 50, borderRadius: 20 }}
          >
            {" "}
            扣{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
