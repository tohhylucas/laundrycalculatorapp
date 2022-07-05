import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import * as Updates from "expo-updates";

export default function HistoryScreen(props) {
  const [changes, setchangeArray] = useState([]);
  const [changeDates, setchangeDatesArray] = useState([]);
  const [reasons, setReasonsArray] = useState([]);
  const tempListofDictionaries = [];
  const isFocused = useIsFocused();

  const getData = async () => {
    const tempchangesList = JSON.parse(await AsyncStorage.getItem("Changes"));
    const tempchangeDatesList = JSON.parse(
      await AsyncStorage.getItem("Change Dates")
    );
    const tempReasonsList = JSON.parse(await AsyncStorage.getItem("Reasons"));

    if (tempchangesList !== null) {
      setchangeArray(tempchangesList);
      setchangeDatesArray(tempchangeDatesList);
      setReasonsArray(tempReasonsList);
    }
  };

  changes.forEach(function (item, index) {
    const tempDictionary = {};
    tempDictionary["ID"] = index;
    tempDictionary["Date"] = changeDates[index];
    tempDictionary["Change"] = item;
    tempDictionary["Reason"] = reasons[index];
    if (parseFloat(item) > 0) {
      tempDictionary["Colour"] = "lime";
    }
    if (parseFloat(item) < 0) {
      tempDictionary["Colour"] = "tomato";
    }

    tempListofDictionaries.push(tempDictionary);
  });

  const deleteData = async () => {
    const tempJSON = JSON.stringify([]);
    await AsyncStorage.setItem("Changes", tempJSON);
    await AsyncStorage.setItem("Change Dates", tempJSON);
    await AsyncStorage.setItem("Reasons", tempJSON);
  };

  //useEffect code that only runs when lists are updated
  useEffect(() => {
    getData();
  }, [props, isFocused]);

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
            History{" "}
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
            deleteData();
            Updates.reloadAsync();
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
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <FlatList
        data={tempListofDictionaries}
        inverted="True"
        renderItem={({ item }) => (
          <Text style={{ backgroundColor: item.Colour, fontSize: 20 }}>
            {item.Date} | {item.Change} | {item.Reason}
          </Text>
        )}
      />
    </View>
  );
}
