import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CalculatorScreen({ navigation }) {
  var [price1, setPrice1] = useState(0);
  var [qty1, setQty1] = useState(0);
  var [subtotal1, setSubtotal1] = useState(0);
  var [price2, setPrice2] = useState(4.0);
  var [qty2, setQty2] = useState(0);
  var [subtotal2, setSubtotal2] = useState(0);
  var [price3, setPrice3] = useState(6.0);
  var [qty3, setQty3] = useState(0);
  var [subtotal3, setSubtotal3] = useState(0);
  var [price4, setPrice4] = useState(0);
  var [qty4, setQty4] = useState(0);
  var [subtotal4, setSubtotal4] = useState(0);
  var [price5, setPrice5] = useState(0);
  var [qty5, setQty5] = useState(0);
  var [subtotal5, setSubtotal5] = useState(0);
  var [price6, setPrice6] = useState(0);
  var [qty6, setQty6] = useState(0);
  var [subtotal6, setSubtotal6] = useState(0);
  var [price7, setPrice7] = useState(0);
  var [qty7, setQty7] = useState(0);
  var [subtotal7, setSubtotal7] = useState(0);
  var [price8, setPrice8] = useState(0);
  var [qty8, setQty8] = useState(0);
  var [subtotal8, setSubtotal8] = useState(0);
  var [price9, setPrice9] = useState(3.5);
  var [qty9, setQty9] = useState(0);
  var [subtotal9, setSubtotal9] = useState(0);
  var [price10, setPrice10] = useState(3.5);
  var [qty10, setQty10] = useState(0);
  var [subtotal10, setSubtotal10] = useState(0);
  var [price11, setPrice11] = useState(0);
  var [qty11, setQty11] = useState(0);
  var [subtotal11, setSubtotal11] = useState(0);

  var [femaleTotal, setfemaleTotal] = useState(0);

  useEffect(() => {
    setSubtotal1((subtotal1 = price1 * qty1));
    setSubtotal2((subtotal2 = price2 * qty2));
    setSubtotal3((subtotal3 = price3 * qty3));
    setSubtotal4((subtotal4 = price4 * qty4));
    setSubtotal5((subtotal5 = price5 * qty5));
    setSubtotal6((subtotal6 = price6 * qty6));
    setSubtotal7((subtotal7 = price7 * qty7));
    setSubtotal8((subtotal8 = price8 * qty8));
    setSubtotal9((subtotal9 = price9 * qty9));
    setSubtotal10((subtotal10 = price10 * qty10));
    setSubtotal11((subtotal11 = price11 * qty11));
    setfemaleTotal(
      subtotal1 +
        subtotal2 +
        subtotal3 +
        subtotal4 +
        subtotal5 +
        subtotal6 +
        subtotal7 +
        subtotal8 +
        subtotal9 +
        subtotal10 +
        subtotal11
    );
  });

  //ASYNC STORAGE SAVE LOAD REMOVE
  const save = async () => {
    try {
      await AsyncStorage.setItem("Female Total", femaleTotal.toString());
    } catch (err) {
      alert(err);
    }
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.gender}> Ladies ???? {femaleTotal}</Text>
      <Text style={styles.title}> PRICE($) | QUANTITY | SUB TOTAL </Text>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Jacket/ Coat</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price1) => setPrice1(price1)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty1) => setQty1(qty1)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal1}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Blouse</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              defaultValue="4.00"
              onChangeText={(price2) => setPrice2(price2)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty2) => setQty2(qty2)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal2}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Dress</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              defaultValue="6.00"
              onChangeText={(price3) => setPrice3(price3)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty3) => setQty3(qty3)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal3}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Evening Gown</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price4) => setPrice4(price4)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty4) => setQty4(qty4)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal4}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Wedding Gown</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price5) => setPrice5(price5)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty5) => setQty5(qty5)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal5}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Cheongsam</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price6) => setPrice6(price6)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty6) => setQty6(qty6)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal6}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Baju Kurong</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price7) => setPrice7(price7)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty7) => setQty7(qty7)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal7}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Saree</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price8) => setPrice8(price8)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty8) => setQty8(qty8)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal8}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Pants</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              defaultValue="3.50"
              onChangeText={(price9) => setPrice9(price9)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty9) => setQty9(qty9)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal9}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Skirt</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              defaultValue="3.50"
              onChangeText={(price10) => setPrice10(price10)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty10) => setQty10(qty10)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal10}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <View>
        <View style={styles.entry}>
          <View style={{ flex: 2 }}>
            <Text style={styles.regular}>Scarf</Text>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Price"
              style={styles.priceInput}
              keyboardType="numeric"
              onChangeText={(price11) => setPrice11(price11)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              placeholder="Qty"
              style={styles.quantityInput}
              keyboardType="numeric"
              onChangeText={(qty11) => setQty11(qty11)}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 20, textAlign: "center", paddingTop: 10 }}>
              {subtotal11}
            </Text>
          </View>
        </View>
      </View>

      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("CalculatorScreen3");
          save();
          console.log("FT : ", femaleTotal);
        }}
      >
        <Text style={styles.buttonText}> Continue </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
  },
  button: {
    borderRadius: 50,
    margin: 20,
    height: 60,
    backgroundColor: "aqua",
  },
  entry: {
    flexDirection: "row",
    paddingTop: 5,
    paddingBottom: 5,
  },
  gender: {
    paddingTop: 50,
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "#DCDCDC",
    padding: 20,
  },

  title: {
    fontSize: 15,
    textAlign: "right",
    padding: 5,
    backgroundColor: "#DCDCDC",
  },

  regular: {
    fontSize: 20,
    textAlign: "left",
    paddingLeft: 20,
    paddingTop: 10,
  },

  priceInput: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    color: "black",
    textAlign: "center",
  },

  quantityInput: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
  },
});
