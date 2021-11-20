import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { HobbiesScreenRouteProp } from "../../navigation/types";

// import { Container } from './styles';

const Hobbies: React.FC<HobbiesScreenRouteProp> = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#748c94",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hobbies</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Hobbies;
