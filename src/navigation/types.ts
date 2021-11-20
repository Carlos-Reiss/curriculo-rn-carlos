import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootTabParamList = {
  Home: undefined;
  Profile: undefined;
  Work: undefined;
  Hobbies: undefined;
  Curiosities: undefined;
};

export type ProfileScreenRouteProp = NativeStackScreenProps<
  RootTabParamList,
  "Profile"
>;

export type CuriositiesScreenRouteProp = NativeStackScreenProps<
  RootTabParamList,
  "Curiosities"
>;

export type WorkScreenRouteProp = NativeStackScreenProps<
  RootTabParamList,
  "Work"
>;

export type HobbiesScreenRouteProp = NativeStackScreenProps<
  RootTabParamList,
  "Hobbies"
>;

export type HomeScreenRouteProp = NativeStackScreenProps<
  RootTabParamList,
  "Home"
>;
