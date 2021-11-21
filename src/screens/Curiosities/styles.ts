import { Platform } from "react-native";
import styles from "styled-components/native";

export const Container = styles.View({
  flex: 1,
  alignItems: "center",
  paddingTop: Platform.OS === "ios" ? 80 : 100,
  backgroundColor: "#748c94",
});

export const CuriositiesContainer = styles.View({
  marginTop: Platform.OS === "android" ? "20%" : "5%",
  backgroundColor: "#506268",
  borderRadius: 20,
  paddingTop: 16,

  justifyContent: "center",
  width: "80%",
  minHeight: Platform.OS === "ios" ? "60%" : "50%",
});

export const TitleName = styles.Text({
  color: "#f5f5f5",
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 3,
});

export const DescriptionContainer = styles.View({
  flex: 1,
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
});

export const TextDescription = styles.Text({
  color: "#f5f5f5",
  fontSize: 12,
});
