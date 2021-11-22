import styles from "styled-components/native";

export const WorkContainer = styles.View({
  backgroundColor: "#506268",
  height: 160,
  marginTop: 22,
  borderRadius: 20,
});

export const ViewCardInfo = styles.View({
  flex: 1,
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "row",
});

export const WorkImage = styles.Image({
  width: 48,
  height: 48,
  borderRadius: 32,
});

export const WorkImageBorder = styles.View({
  background: "#F5F5F5",
  padding: 2,
  borderRadius: 32,
});

export const ViewInfo = styles.View({
  width: "75%",
  height: "75%",
  padding: 10,
});

export const ViewName = styles.View({});

export const ViewBio = styles.ScrollView({
  marginTop: 5,
});

export const TextName = styles.Text({
  color: "#f5f5f5",
  fontSize: 13,
  fontWeight: "bold",
});

export const TextBio = styles.Text({
  color: "#f5f5f5",
  fontSize: 13,
});

export const ViewDate = styles.View({});

export const TextDate = styles.Text({
  color: "#f5f5f5",
  fontSize: 10,
});
