import { Platform } from "react-native";
import styles from "styled-components/native";

export const Container = styles.View({
  flex: 1,
  alignItems: "center",
  paddingTop: Platform.OS === "ios" ? 80 : 100,
  backgroundColor: "#748c94",
});

export const TitleName = styles.Text({
  color: "#f5f5f5",
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 3,
});

export const ProfileContainer = styles.View({
  width: "80%",
  marginTop: Platform.OS === "android" ? "20%" : "5%",

  backgroundColor: "#506268",
  borderRadius: 20,

  minHeight: Platform.OS === "ios" ? "60%" : "50%",
});

export const ViewCardInfo = styles.View({
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
  height: "65%",
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

export const InfoContainer = styles.View({
  borderColor: "#748c94",
  borderTopWidth: 0.4,
});

export const InfoTag = styles.View({
  padding: 8,
  marginTop: 12,
  flexDirection: "row",
  justifyContent: "space-between",
});

export const TagText = styles.Text({
  color: "#f5f5f5",
  fontSize: 13,
  fontWeight: "bold",
});

export const SubText = styles.Text({
  color: "#f5f5f5",
  fontSize: 12,
  fontStyle: "italic",
});
