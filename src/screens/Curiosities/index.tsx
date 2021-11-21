import React from "react";
import { CuriositiesScreenRouteProp } from "../../navigation/types";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
  Container,
  CuriositiesContainer,
  DescriptionContainer,
  TitleName,
  TextDescription,
} from "./styles";
import { View } from "react-native";

const Curiosities: React.FC<CuriositiesScreenRouteProp> = () => {
  return (
    <Container>
      <TitleName>Curiosidades</TitleName>
      <CuriositiesContainer>
        <DescriptionContainer>
          <MaterialIcons name="computer" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Fui estagiário do TRE-PE, lá comecei minha jornada como FullStack.
            </TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <SimpleLineIcons name="present" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Gosto de Fazer compras de coisas que envolve tecnologia ou até
              mesmo coisas para casa.
            </TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <Ionicons
            name="md-checkmark-done-outline"
            size={24}
            color="#2C363A"
          />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Sempre tento ser uma pessoa positiva, tentando ver o lado bom de
              todas as coisas que acontece eu redor.
            </TextDescription>
          </View>
        </DescriptionContainer>

        <DescriptionContainer>
          <FontAwesome5 name="running" size={24} color="#2C363A" />
          <View style={{ width: "60%" }}>
            <TextDescription>
              Sobre aprendizagem, sempre fui uma pessoa que sabe aprender fácil
              e bastante proativo busco sempre está aprendendo algo legal.
            </TextDescription>
          </View>
        </DescriptionContainer>
      </CuriositiesContainer>
    </Container>
  );
};

export default Curiosities;
