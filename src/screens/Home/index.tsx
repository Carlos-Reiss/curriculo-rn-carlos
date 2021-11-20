import React from "react";
import { Platform, Text, View } from "react-native";
import { HomeScreenRouteProp } from "../../navigation/types";
import Profile from "./components/profile";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Cards,
  ActionCard,
  ViewButton,
  ButtonAction,
  ButtonTextGo,
} from "./styles";

const Home = ({ navigation }: HomeScreenRouteProp) => {
  return (
    <Container>
      <Profile onPress={() => navigation.navigate("Profile")} />
      <Cards>
        <ActionCard>
          <ViewButton>
            <ButtonAction onPress={() => navigation.navigate("Hobbies")}>
              <ButtonTextGo>Visitar Hobbies</ButtonTextGo>
              <AntDesign name="arrowright" size={14} color="#FFF" />
            </ButtonAction>
          </ViewButton>
          <View style={{ alignItems: "center" }}>
            <Text>Oi</Text>
          </View>
        </ActionCard>

        <ActionCard
          style={{
            marginLeft: 20,
          }}
        >
          <ViewButton>
            <ButtonAction onPress={() => navigation.navigate("Curiosities")}>
              <ButtonTextGo>Visitar Curiosidades</ButtonTextGo>
              <AntDesign name="arrowright" size={14} color="#FFF" />
            </ButtonAction>
          </ViewButton>
          <Text>Oi</Text>
        </ActionCard>
      </Cards>
    </Container>
  );
};

export default Home;
