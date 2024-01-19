import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  modal: {
    backgroundColor: "white",
    paddingBottom: 32,
    paddingHorizontal: 4,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    alignItems: "center",
  },
  bar: {
    marginVertical: 16,
    width: 48,
    height: 4,
    backgroundColor: "grey",
    borderRadius: 4,
  },
  option: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    color: "white",
  },
});

export default styles;
