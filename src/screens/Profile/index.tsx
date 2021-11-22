import React from "react";
import { Text, View } from "react-native";
import { ProfileScreenRouteProp } from "../../navigation/types";

import {
  Container,
  ProfileContainer,
  TitleName,
  ViewCardInfo,
  ProfileImage,
  ProfileImageBorder,
  TextBio,
  TextName,
  ViewBio,
  ViewInfo,
  ViewName,
  InfoContainer,
  InfoTag,
  TagText,
  SubText,
} from "./styles";

const Profile: React.FC<ProfileScreenRouteProp> = () => {
  return (
    <Container>
      <TitleName>Perfil</TitleName>
      <ProfileContainer>
        <ViewCardInfo>
          <ProfileImageBorder>
            <ProfileImage
              source={{
                uri: "https://avatars.githubusercontent.com/u/54441989?v=4",
              }}
            />
          </ProfileImageBorder>
          {/* view dados */}
          <ViewInfo>
            <ViewName>
              <TextName>Carlos Antonio Reis</TextName>
            </ViewName>
            <ViewBio showsVerticalScrollIndicator={false}>
              <TextBio>
                Estudante de Ciência da Computação na Universidade Católica de
                Pernambuco, também estudando diversas tecnologias do mercado.
              </TextBio>
            </ViewBio>
          </ViewInfo>
        </ViewCardInfo>
        <InfoContainer>
          <InfoTag style={{ marginTop: 16 }}>
            <TagText>Data de Nascimento: </TagText>
            <SubText>10 de Junho de 1999</SubText>
          </InfoTag>
          <InfoTag>
            <TagText>Curso de Formação:</TagText>
            <SubText>Ciência da Computação</SubText>
          </InfoTag>

          <InfoTag>
            <TagText>Trabalho:</TagText>
            <SubText>Software Developer ReactJS, NodeJS.</SubText>
          </InfoTag>

          <InfoTag>
            <TagText>Localização:</TagText>
            <SubText>Recife, PE - Brasil</SubText>
          </InfoTag>
        </InfoContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
