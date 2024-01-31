import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: { flexDirection: "row" },
  itemLeft: { width: 102, marginRight: 16 },
  itemImageContainer: {
    aspectRatio: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  itemRight: { flex: 1, justifyContent: "space-between" },
  itemTitle: { fontWeight: "bold" },
});

export default styles;
