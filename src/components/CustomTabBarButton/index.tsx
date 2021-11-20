import React from "react";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View } from "react-native";
import { stylesTabBarGlobal } from "../../types";

export const CustomTabBarButton = ({
  children,
  onPress,
}: BottomTabBarButtonProps) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignContent: "center",
      ...stylesTabBarGlobal.shadow,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#748c94",
        ...stylesTabBarGlobal.shadow,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);
