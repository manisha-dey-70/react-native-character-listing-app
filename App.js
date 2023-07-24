import SearchBar from "./src/components/searchComponent";
import DetailsComponent from "./src/components/detailsComponent";
import LoginComponent from "./src/components/loginComponent";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginComponent} />
          <Stack.Screen name="Home" component={SearchBar} />
          <Stack.Screen name="Details" component={DetailsComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
