import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import * as Updates from "expo-updates";

export default function DebtScreen({ props }) {
  const [tempName, settempName] = useState("");
  const [tempDebt, settempDebt] = useState("");
  const [names, setnames] = useState([]);
  const [debts, setdebts] = useState([]);
  const [tempListofDebts, settempListofDebts] = useState([]);

  const addDebt = async () => {
    if (tempName !== "" && tempDebt !== 0) {
      const currentNames = JSON.parse(await AsyncStorage.getItem("Debt Names"));
      const currentDebts = JSON.parse(
        await AsyncStorage.getItem("Debt Amounts")
      );
      currentNames.push(tempName);
      currentDebts.push(tempDebt);

      // Update Async Storage
      await AsyncStorage.setItem("Debt Names", JSON.stringify(currentNames));
      await AsyncStorage.setItem("Debt Amounts", JSON.stringify(currentDebts));

      // Update dictionary to display
      const tempList = [];

      currentDebts.forEach(function (item, index) {
        const tempDictionary = {};
        tempDictionary["ID"] = index;
        tempDictionary["Name"] = currentNames[index];
        tempDictionary["Debt"] = item;
        tempList.push(tempDictionary);
      });
      settempListofDebts(tempList);
      console.log(tempList);
    } else {
      alert("Invalid input");
    }
  };

  const load = async () => {
    const names = JSON.parse(await AsyncStorage.getItem("Debt Names"));
    const debts = JSON.parse(await AsyncStorage.getItem("Debt Amounts"));
    const tempList = [];

    debts.forEach(function (item, index) {
      const tempDictionary = {};
      tempDictionary["ID"] = index;
      tempDictionary["Name"] = names[index];
      tempDictionary["Debt"] = item;
      tempList.push(tempDictionary);
    });
    settempListofDebts(tempList);
  };

  const clearDebt = async (item) => {
    const indexofDebt = tempListofDebts.indexOf(item);
    const currentlist = JSON.parse(JSON.stringify(tempListofDebts));
    currentlist.splice(indexofDebt, 1);
    settempListofDebts(currentlist);

    //Remove that item from Async Storage
    const currentAsyncNames = JSON.parse(
      await AsyncStorage.getItem("Debt Names")
    );
    const currentAsyncDebts = JSON.parse(
      await AsyncStorage.getItem("Debt Amounts")
    );
    currentAsyncNames.splice(indexofDebt, 1);
    currentAsyncDebts.splice(indexofDebt, 1);
    await AsyncStorage.setItem("Debt Names", JSON.stringify(currentAsyncNames));
    await AsyncStorage.setItem(
      "Debt Amounts",
      JSON.stringify(currentAsyncDebts)
    );
  };

  const deleteAllDebts = async () => {
    const tempJSON = JSON.stringify([]);
    await AsyncStorage.setItem("Debt Names", tempJSON);
    await AsyncStorage.setItem("Debt Amounts", tempJSON);
    settempListofDebts([]);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <View>
      <View style={{ flexDirection: "row", backgroundColor: "#DCDCDC" }}>
        <View>
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
            Debts{" "}
          </Text>
        </View>
        <Pressable
          style={{
            marginLeft: 120,
            marginTop: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            deleteAllDebts();
          }}
        >
          <Text
            style={{
              fontSize: 20,
              backgroundColor: "red",
              borderRadius: 20,
              fontWeight: "bold",
              padding: 10,
            }}
          >
            Delete All
          </Text>
        </Pressable>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="Name"
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
          onChangeText={(tempName) => settempName(tempName)}
        />

        <TextInput
          placeholder="Debt"
          style={{
            backgroundColor: "white",
            marginTop: 20,
            fontSize: 30,
            padding: 20,
            margin: 20,
            textAlign: "left",
            height: 100,
            width: 100,
          }}
          keyboardType="numeric"
          onChangeText={(tempDebt) => settempDebt(parseFloat(tempDebt))}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "tomato",
          marginVertical: 20,
          marginHorizontal: 100,
          alignItems: "center",
          borderRadius: 30,
        }}
        onPress={() => {
          addDebt();
        }}
      >
        <Text style={{ fontSize: 30 }}>Add</Text>
      </TouchableOpacity>
      <View style={{ paddingBottom: 650 }}>
        <FlatList
          data={tempListofDebts}
          inverted="True"
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                clearDebt(item);
              }}
            >
              <Text
                style={{ backgroundColor: "white", fontSize: 40, padding: 30 }}
              >
                {item.Name} | {item.Debt}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
