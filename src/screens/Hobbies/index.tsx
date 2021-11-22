import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { HobbiesScreenRouteProp } from "../../navigation/types";
import {
  Container,
  DescriptionContainer,
  HobbiesContainer,
  TextDescription,
  TitleName
} from "./styles";

const Hobbies: React.FC<HobbiesScreenRouteProp> = () => {
  return (
    <Container>
      <TitleName>Hobbies</TitleName>
      <HobbiesContainer>
        <DescriptionContainer>
          <MaterialCommunityIcons name="movie-open" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Adoro assistir series e filmes, principalmente filmes de ficção
              cientifica e aventura.
            </TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <MaterialCommunityIcons name="beach" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>Gosto de ir a praia ver o mar, praticar esportes, principalmente jogar futebol.</TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <MaterialCommunityIcons name="gamepad" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Adoro jogar jogos eletrónicos e de tabuleiro.
            </TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <EvilIcons name="gear" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Boa parte do tempo livre é dedicado a aprender novas tecnologias e
              aprimorar em outras que já sei.
            </TextDescription>
          </View>
        </DescriptionContainer>
      </HobbiesContainer>
    </Container>
  );
};

export default Hobbies;
