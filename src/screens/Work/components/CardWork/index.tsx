import React from "react";
import { View } from "react-native";
import {
  WorkContainer,
  WorkImage,
  WorkImageBorder,
  TextBio,
  TextName,
  ViewBio,
  ViewCardInfo,
  ViewInfo,
  ViewName,
  ViewDate,
  TextDate,
} from "./styles";

interface WorkProp {
  title: string;
  description: string;
  url: string;
  date: string;
}

const CardWork = ({ title, url, description, date }: WorkProp) => {
  return (
    <WorkContainer>
      <ViewCardInfo>
        <WorkImageBorder>
          <WorkImage
            resizeMode="contain"
            source={{
              uri: url,
            }}
          />
        </WorkImageBorder>
        <ViewInfo>
          <ViewName>
            <TextName>{title}</TextName>
          </ViewName>
          <ViewDate>
            <TextDate>{date}</TextDate>
          </ViewDate>
          <ViewBio contentContainerStyle={{ height: "100%" }}>
            <TextBio>{description}</TextBio>
          </ViewBio>
        </ViewInfo>
      </ViewCardInfo>
    </WorkContainer>
  );
};

export default CardWork;
