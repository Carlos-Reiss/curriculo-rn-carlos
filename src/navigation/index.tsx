import {
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";
import React from "react";
import { CustomTabBarButton } from "../components/CustomTabBarButton";
import TabBar from "../components/TabBar";
import Curiosities from "../screens/Curiosities";
import Hobbies from "../screens/Hobbies";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Work from "../screens/Work";
import { stylesTabBarGlobal } from "../types";
import { RootTabParamList } from "./types";

const RootTab = createBottomTabNavigator<RootTabParamList>();

export function Navigation() {
  return (
    <RootTab.Navigator
      screenOptions={{
        headerLeftLabelVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          backgroundColor: "#FFF",
          borderRadius: 15,
          paddingHorizontal: 2,
          height: 90,
          ...stylesTabBarGlobal.shadow,
        },
      }}
      initialRouteName="Home"
    >
      <RootTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar focused={focused} iconName="user" tabName="Perfil" />
          ),
        }}
      />
      <RootTab.Screen
        name="Hobbies"
        component={Hobbies}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar focused={focused} iconName="dingding" tabName="Hobbies" />
          ),
        }}
      />

      <RootTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar
              focused={focused}
              iconName="home"
              tabName="Home"
              colorOffFocused="#000"
              colorOnFocused="#FFF"
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <RootTab.Screen
        name="Work"
        component={Work}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar focused={focused} iconName="rocket1" tabName="Trabalhos" />
          ),
        }}
      />
      <RootTab.Screen
        name="Curiosities"
        component={Curiosities}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBar focused={focused} iconName="rest" tabName="Curiosidades" />
          ),
        }}
      />
    </RootTab.Navigator>
  );
}
