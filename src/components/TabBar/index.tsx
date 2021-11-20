import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// import { Container } from './styles';

type ITabBar = {
  focused: boolean;
  iconName: string;
  tabName: string;
  colorOnFocused?: string;
  colorOffFocused?: string;
};

const TabBar = ({
  focused,
  iconName,
  tabName,
  colorOffFocused,
  colorOnFocused,
}: ITabBar) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: focused
          ? colorOnFocused
            ? colorOnFocused
            : "#7F5DF0"
          : "",
        borderBottomWidth: focused ? 2 : 0,
      }}
    >
      <AntDesign
        name={iconName as any}
        size={20}
        color={
          focused
            ? colorOnFocused
              ? colorOnFocused
              : "#7F5DF0"
            : colorOffFocused
            ? colorOffFocused
            : "#748c94"
        }
      />
      <Text
        style={{
          color: focused
            ? colorOnFocused
              ? colorOnFocused
              : "#7F5DF0"
            : colorOffFocused
            ? colorOffFocused
            : "#748c94",
          fontSize: 11,
        }}
      >
        {tabName}
      </Text>
    </View>
  );
};

export default TabBar;
