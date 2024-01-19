import { CardProps } from "./Card.props";
import styles from "./Card.style";
import { Image, Text, View } from "react-native";
import { Button } from "react-native-paper";

const Card = (props: CardProps) => {
  const { item, onEnter } = props;

  return (
    <View style={styles.item}>
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
        <Text>Release Date: {item.release_date || item.first_air_date}</Text>
        <View style={{ alignSelf: "flex-start" }}>
          <Button
            mode="contained"
            textColor="white"
            buttonColor="teal"
            onPress={() => onEnter(item.id)}
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
