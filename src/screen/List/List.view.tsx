import { FlatList, Image, Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Modal from "react-native-modal";
import { ListProps } from "./List.props";
import styles from "./List.style";

const ListView = (props: ListProps) => {
  const {
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
      <Button mode="contained" onPress={handleOpen} style={{ borderRadius: 8 }}>
        Open
      </Button>
      <FlatList
        data={items}
        renderItem={({ item, index }) => (
          <View style={styles.item} key={index}>
            <View style={styles.itemLeft}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                }}
                style={styles.itemImage}
              />
            </View>
            <View style={styles.itemRight}>
              <Text style={styles.itemTitle}>{item.title || item.name}</Text>
              <Text>Popularity: {item.popularity}</Text>
              <Text>Release Date: {item.release_date}</Text>
              <View style={{ alignSelf: "flex-start" }}>
                <Button
                  mode="contained"
                  style={{ borderRadius: 4 }}
                  onPress={() => handleEnter(item.id)}
                >
                  More Details
                </Button>
              </View>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
      />
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
