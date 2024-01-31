import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 16,
  },
  imageContainer: {
    width: "60%",
    aspectRatio: 1,
    marginBottom: 16,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  body: {
    width: "80%",
    marginBottom: 16,
  },
});

export default styles;
