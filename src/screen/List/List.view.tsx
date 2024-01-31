import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { ListProps } from "./List.props";
import styles from "./List.style";
import Select from "../../component/Select";
import Card from "../../component/Card";

const ListView = (props: ListProps) => {
  const {
    isLoading,
    isVisible,
    option,
    options,
    items,
    handleOpen,
    handleClose,
    handleSelect,
    handleEnter,
  } = props;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleOpen}
        style={{ alignSelf: "center", width: "50%", marginBottom: 16 }}
      >
        <Select label={option?.label} />
      </Pressable>
      {isLoading ? (
        <ActivityIndicator size="large" color="teal" animating />
      ) : (
        <FlatList
          data={items}
          renderItem={({ item, index }) => (
            <Card item={item} onEnter={handleEnter} key={index} />
          )}
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                borderColor: "lightgrey",
                borderWidth: 0.5,
                marginVertical: 8,
              }}
            />
          )}
          style={styles.list}
        />
      )}
      <Modal
        testID={"modal"}
        isVisible={isVisible}
        onSwipeComplete={handleClose}
        style={{ justifyContent: "flex-end", margin: 0 }}
        swipeDirection="down"
      >
        <View style={styles.modal}>
          <View style={styles.bar} />
          <View style={{ alignSelf: "stretch" }}>
            {options.map((optionItem, index) => (
              <Pressable onPress={() => handleSelect(optionItem)} key={index}>
                <Text
                  style={[
                    styles.option,
                    {
                      backgroundColor:
                        optionItem.value === option?.value ? "teal" : "white",
                      color:
                        optionItem.value === option?.value ? "white" : "black",
                    },
                  ]}
                >
                  {optionItem.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListView;
