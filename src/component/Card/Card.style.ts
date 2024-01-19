import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: { flexDirection: "row" },
  itemLeft: { width: 102, marginRight: 16 },
  itemImage: {
    aspectRatio: 1,
    objectFit: "cover",
  },
  itemRight: { flex: 1 },
  itemTitle: { fontWeight: "bold" },
});

export default styles;
