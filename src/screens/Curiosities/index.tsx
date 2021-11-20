import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CuriositiesScreenRouteProp } from "../../navigation/types";

// import { Container } from './styles';

const Curiosities: React.FC<CuriositiesScreenRouteProp> = ({
  navigation,
  route,
}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#748c94",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Curiosities</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Curiosities;
