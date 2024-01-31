import { CardProps } from "./Card.props";
import styles from "./Card.style";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";
import Ionicons from "@expo/vector-icons/Ionicons";

const Card = (props: CardProps) => {
  const { item, onEnter } = props;

  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.itemImageContainer}>
          {item.poster_path || item.profile_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${
                  item.poster_path || item.profile_path
                }`,
              }}
              style={styles.itemImage}
            />
          ) : (
            <Ionicons name="images" size={25} />
          )}
        </View>
      </View>
      <View style={styles.itemRight}>
        <View>
          <Text style={styles.itemTitle}>{item.title || item.name}</Text>
          <Text>Popularity: {item.popularity}</Text>
        </View>
        {(item.release_date || item.first_air_date) && (
          <Text>Release Date: {item.release_date || item.first_air_date}</Text>
        )}
        <View style={{ alignSelf: "flex-start" }}>
          <Button
            mode="contained"
            textColor="white"
            buttonColor="teal"
            onPress={() => onEnter(item)}
            style={{ borderRadius: 4 }}
          >
            More Details
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Card;
