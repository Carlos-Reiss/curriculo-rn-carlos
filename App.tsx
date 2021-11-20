import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar backgroundColor="#748c94" translucent style="light" />
    </NavigationContainer>
  );
}
