import { Platform } from "react-native";
import styles from "styled-components/native";

export const Container = styles.View({
  flex: 1,
  alignItems: "center",
  paddingTop: Platform.OS === "ios" ? 80 : 100,
  backgroundColor: "#748c94",
  width: '100%',
});

export const TitleName = styles.Text({
  color: "#f5f5f5",
  fontSize: 16,
  fontWeight: "bold",
  letterSpacing: 3,
});
