import { SafeAreaView, StyleSheet, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import React from "react";
import { useState } from "react/cjs/react.development";

export default function LoginComponent({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.search}>
        <TextInput
          style={styles.input}
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => {
            if (username && password) navigation.navigate("Home");
          }}
        >
          Login
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "#36454F",
    padding: 30,
    height: "100%",
  },
  button: {
    alignSelf: "center",
    width: "30%",
  },
  input: {
    marginBottom: 30,
    minWidth: 100,
    minHeight: 50,
  },
});
