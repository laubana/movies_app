import Ionicons from "@expo/vector-icons/Ionicons";
import { SelectProps } from "./Select.props";
import styles from "./Select.style";
import { Text, View } from "react-native";

const Select = (props: SelectProps) => {
  const { label } = props;

  return (
    <View style={styles.container}>
      <Text style={{ flexGrow: 1, color: "#616161" }}>{label}</Text>
      <Ionicons name="chevron-down" color="#616161" />
    </View>
  );
};

export default Select;
