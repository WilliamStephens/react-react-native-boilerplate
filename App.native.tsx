import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Hello from "./components/Hello";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu,\n"
});

type Props = {};

export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.instructions}>
            To get started, edit App.native.ts
          </Text>
          <Text style={styles.instructions}>
            You can also edit Hello.tsx to change the component below
          </Text>
          <Text style={styles.instructions}>{instructions}</Text>
        </View>
        <Hello name="Wil" enthusiasmLevel={1} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
    margin: 50
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
