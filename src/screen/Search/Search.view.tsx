import { FlatList, Pressable, Text, View } from "react-native";
import { Input, InputIcon, InputField } from "@gluestack-ui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import Modal from "react-native-modal";
import { SearchProps } from "./Search.props";
import styles from "./Search.style";
import { Button } from "react-native-paper";
import Select from "../../component/Select";
import Card from "../../component/Card";

const SearchView = (props: SearchProps) => {
  const {
    isSearched,
    isVisible,
    keyword,
    setKeyword,
    option,
    options,
    items,
    handleOpen,
    handleClose,
    handleSelect,
    handleEnter,
    handleSearch,
  } = props;

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
        <Text>
          Search Movie/TV Show Name<Text style={{ color: "red" }}>*</Text>
        </Text>
        <Input
          variant="outline"
          height="auto"
          borderWidth={0}
          backgroundColor="lightgrey"
          alignItems="center"
          paddingLeft="$2"
          paddingVertical="$1"
        >
          <InputIcon
            as={() => <Ionicons name="search" color="grey" size={24} />}
          />
          <InputField
            placeholder="i.e James Bond, CSI"
            value={keyword}
            onChangeText={setKeyword}
          />
        </Input>
        <Text>
          Choose Search Type<Text style={{ color: "red" }}>*</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={handleOpen}
            style={{
              flexGrow: 1,
              marginRight: 16,
            }}
          >
            <Select label={option?.label} />
          </Pressable>
          <Button
            mode="contained"
            textColor="white"
            buttonColor="teal"
            icon={() => (
              <Ionicons name="search" size={18} style={{ color: "white" }} />
            )}
            style={{
              borderRadius: 4,
            }}
            onPress={handleSearch}
          >
            Search
          </Button>
        </View>
        <Text>Please select a search type</Text>
      </View>
      {isSearched ? (
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
      ) : (
        <Text
          style={{
            alignSelf: "center",
            marginTop: 128,
            fontWeight: "bold",
            fontSize: 24,
          }}
        >
          Please initiate a search
        </Text>
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

export default SearchView;
