import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ProfileScreenRouteProp } from "../../navigation/types";

// import { Container } from './styles';

const Profile: React.FC<ProfileScreenRouteProp> = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#748c94",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Profile</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default Profile;
