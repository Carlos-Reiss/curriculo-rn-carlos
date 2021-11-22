import { Platform } from "react-native";
import styles from "styled-components/native";

export const Container = styles.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  paddingTop: Platform.OS === "ios" ? 20 : 100,
  backgroundColor: "#748c94",
});

export const Cards = styles.View({
  marginTop: 20,
  marginBottom: "30%",
  width: "80%",
  minHeight: Platform.OS === "ios" ? "20%" : "20%",

  flexDirection: "row",
  justifyContent: "space-around",
});

export const ActionCard = styles.View({
  flex: 1,
  borderRadius: 8,
  backgroundColor: "#506268",
  justifyContent: "flex-start",
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

export const InfoAction = styles.View({
  // marginTop: "50%",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 16,
});

export const SimpleText = styles.Text({
  color: "#FFF",
  fontSize: 12,
  width: "80%",
  paddingBottom: 6,
});
