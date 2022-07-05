import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Updates from "expo-updates";

export default function CalculatorScreen4({ navigation }) {
  var [maleTotal, setmaleTotal] = useState(0);
  var [femaleTotal, setfemaleTotal] = useState(0);
  var [othersTotal, setothersTotal] = useState(0);
  var [Total, setTotal] = useState(0);

  //ASYNC STORAGE SAVE LOAD REMOVE
  const save = async () => {
    // Check if total earnings value exists
    var currentOT = await AsyncStorage.getItem("Overall Total");
    if (currentOT === null) {
      await AsyncStorage.setItem("Overall Total", "0");
    }

    // Update total earnings value
    await AsyncStorage.setItem(
      "Overall Total",
      (
        parseFloat(await AsyncStorage.getItem("Overall Total")) + Total
      ).toString()
    );

    // Check if Changes list exists in Async, else set it to hold empty list
    var changes = await AsyncStorage.getItem("Changes");
    if (changes === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Changes", tempJSON);
    }

    // Update Changes list to hold current change
    if (Total !== 0) {
      const changes = JSON.parse(await AsyncStorage.getItem("Changes"));
      changes.push(Total);
      tempJSON = JSON.stringify(changes);
      await AsyncStorage.setItem("Changes", tempJSON);
      console.log("DidUpdateChanges");
    }

    // Check if Change Dates list exists in Async, else set it to hold empty list
    var changeDates = await AsyncStorage.getItem("Change Dates");
    console.log(JSON.parse(changeDates));
    if (changeDates === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Change Dates", tempJSON);
    }

    // Update Change Dates list to hold current change date
    if (Total !== 0) {
      const changeDates = JSON.parse(
        await AsyncStorage.getItem("Change Dates")
      );

      changeDates.push(new Date().toDateString());
      tempJSON = JSON.stringify(changeDates);
      await AsyncStorage.setItem("Change Dates", tempJSON);
      console.log("DidUpdateCD");
    }

    // Check if Reasons list exists in Async, else set it to hold empty list
    var reasons = await AsyncStorage.getItem("Reasons");
    if (reasons === null) {
      const list = [];
      const tempJSON = JSON.stringify(list);
      await AsyncStorage.setItem("Reasons", tempJSON);
    }

    // Update Reasons list to hold current change date
    if (Total !== 0) {
      const reasons = JSON.parse(await AsyncStorage.getItem("Reasons"));
      reasons.push("Laundry");
      console.log(reasons);
      const tempJSON = JSON.stringify(reasons);
      await AsyncStorage.setItem("Reasons", tempJSON);
    }
    console.log("DidUpdateReasons");
  };

  const load = async () => {
    try {
      let maleTotal = parseFloat(await AsyncStorage.getItem("Male Total"));
      let femaleTotal = parseFloat(await AsyncStorage.getItem("Female Total"));
      let othersTotal = parseFloat(await AsyncStorage.getItem("Others Total"));
      if (maleTotal !== null && femaleTotal !== null && othersTotal !== null) {
        setmaleTotal(maleTotal);
        setfemaleTotal(femaleTotal);
        setothersTotal(othersTotal);
        setTotal(maleTotal + femaleTotal + othersTotal);
      }
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    load();
  });

  //STORAGE TO DB

  // const db = SQLite.openDatabase({
  //   name: "Transactions",
  // });

  // const createTables = () =>
  //   db.transaction((txn) => {
  //     txn.executeSql(
  //       "CREATE TABLE IF NOT EXISTS Transactions (ID INTEGER PRIMARY KEY AUTOINCREMENT, TOTAL REAL)",
  //       [],
  //       () => {},
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  //   });

  // const addTransaction = () => {
  //   console.log(Total);
  //   db.transaction((txn) => {
  //     txn.executeSql(
  //       "INSERT INTO Transactions (TOTAL) VALUES (" + Total + ")",
  //       () => {},
  //       (error) => {
  //         alert(error);
  //       }
  //     );
  //   });

  //   console.log(db);
  // };

  // useEffect(() => {
  //   createTables();
  // }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}> TRANSACTION </Text>
        <Text style={styles.regular}> Male : {maleTotal} </Text>
        <Text style={styles.regular}> Female : {femaleTotal} </Text>
        <Text style={styles.regular}> Others : {othersTotal}</Text>
        <Text style={styles.final}> TOTAL : {Total} </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          save();
          Updates.reloadAsync();
        }}
      >
        <View
          style={{
            borderRadius: 20,
            backgroundColor: "pink",
            padding: 10,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Confirm</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 100,
  },
  regular: {
    fontSize: 50,
    paddingTop: 50,
    color: "grey",
  },

  final: {
    fontSize: 50,
    fontWeight: "bold",
    paddingTop: 30,
    color: "black",
  },
});
