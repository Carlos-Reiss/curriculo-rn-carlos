import React from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  ButtonActionProfile,
  ButtonTextGoProfile,
  ProfileContainer,
  ProfileImage,
  ProfileImageBorder,
  TextBio,
  TextName,
  ViewBio,
  ViewButtonProfile,
  ViewCardInfo,
  ViewInfo,
  ViewName
} from "./styles";

type ProfileProps = { onPress: () => void };

const Profile = ({ onPress }: ProfileProps) => {
  return (
    <ProfileContainer>
      <ViewButtonProfile>
        <ButtonActionProfile onPress={onPress}>
          <ButtonTextGoProfile>Visitar Perfil</ButtonTextGoProfile>
          <AntDesign name="arrowright" size={14} color="#FFF" />
        </ButtonActionProfile>
      </ViewButtonProfile>

      <ViewCardInfo>
        <ProfileImageBorder>
          <ProfileImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/54441989?v=4",
            }}
          />
        </ProfileImageBorder>
        <ViewInfo>
          <ViewName>
            <TextName>Carlos Antonio Reis</TextName>
          </ViewName>
          <ViewBio>
            <TextBio>
              Estudante de Ciência da Computação na Universidade Católica de
              Pernambuco, também estudando diversas tecnologias do mercado.
            </TextBio>
          </ViewBio>
        </ViewInfo>
      </ViewCardInfo>
    </ProfileContainer>
  );
};

export default Profile;
