import { Platform } from "react-native";
import styles from "styled-components/native";

export const ProfileContainer = styles.View({
  backgroundColor: "#506268",
  height: Platform.OS === "ios" ? "25%" : "20%",
  width: "80%",
  borderRadius: 8,
});

export const ViewButtonProfile = styles.View({
  justifyContent: "flex-end",
  backgroundColor: "#2C363A",
  shadowColor: "#2C363A",
  shadowOffset: {
    width: 0,
    height: 10,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.5,
  elevation: "5px",
  padding: 4,
  borderTopRightRadius: 8,
  borderTopLeftRadius: 8,
});

export const ButtonActionProfile = styles.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const ButtonTextGoProfile = styles.Text({
  color: "#FFF",
  textAlign: "right",
});

export const ViewCardInfo = styles.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
});

export const ProfileImage = styles.Image({
  width: 64,
  height: 64,
  borderRadius: 32,
});

export const ProfileImageBorder = styles.View({
  background: "#2C363A",
  padding: 2,
  borderRadius: 32,
});

export const ViewInfo = styles.View({
  width: "65%",
  height: "55%",
});

export const ViewName = styles.View({});

export const ViewBio = styles.ScrollView({
  marginTop: 5,
});

export const TextName = styles.Text({
  color: "#f5f5f5",
  fontSize: 16,
  fontWeight: "bold",
});

export const TextBio = styles.Text({
  color: "#f5f5f5",
  fontSize: 13,
});
