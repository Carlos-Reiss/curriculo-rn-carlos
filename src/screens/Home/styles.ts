import { Platform } from "react-native";
import styles from "styled-components/native";

export const Container = styles.View({
  flex: 1,
  alignItems: "center",
  paddingTop: Platform.OS === "ios" ? 80 : 220,
  backgroundColor: "#748c94",
});

export const Cards = styles.View({
  marginTop: 20,

  width: "80%",
  minHeight: Platform.OS === "ios" ? "40%" : "50%",

  flexDirection: "row",
  justifyContent: "space-around",
});

export const ActionCard = styles.View({
  flex: 1,
  borderRadius: 8,
  backgroundColor: "#506268",
});

export const ViewButton = styles.View({
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

export const ButtonAction = styles.TouchableOpacity({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
});

export const ButtonTextGo = styles.Text({
  color: "#FFF",
  textAlign: "right",
});
