import React from "react";
import { Platform, ScrollView, Text, View } from "react-native";
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
  InfoAction,
  SimpleText,
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
          <InfoAction>
            <SimpleText>Um pouco sobre Hobbies</SimpleText>
            <SimpleText> - Adoro assistir series e filmes.</SimpleText>
            <SimpleText> - Gosto bastante de ir a praia ver o mar.</SimpleText>
            <SimpleText>
              {" "}
              - Adoro jogar jogos eletrónicos e de tabuleiro.
            </SimpleText>
          </InfoAction>
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
          <InfoAction>
            <SimpleText>Um pouco sobre curiosidades</SimpleText>
            <SimpleText>
              - Fui estagiário do TRE-PE, lá comecei minha jornada como
              FullStack.
            </SimpleText>
            <SimpleText>
              - Gosto de fazer compras de coisas que envolve tecnologia ou até
              mesmo coisas para casa.
            </SimpleText>
          </InfoAction>
        </ActionCard>
      </Cards>
    </Container>
  );
};

export default Home;
