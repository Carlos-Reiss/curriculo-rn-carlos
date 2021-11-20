import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { WorkScreenRouteProp } from "../../navigation/types";

// import { Container } from './styles';

const Work: React.FC<WorkScreenRouteProp> = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#748c94",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Work</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Work;
