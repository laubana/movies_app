import { ActivityIndicator, Image, Text, View } from "react-native";
import { DetailProps } from "./Detail.props";
import styles from "./Detail.style";

const DetailView = (props: DetailProps) => {
  const { isLoading, item } = props;

  return (
    <View style={styles.container}>
      {item && !isLoading ? (
        <>
          <Text style={styles.title}>{item?.title || item?.name}</Text>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
            }}
            style={styles.image}
          />
          <Text style={styles.body}>{item.overview}</Text>
          <Text style={styles.body}>
            Popularity: {item.popularity} | Release Date:{" "}
            {item.release_date || item.first_air_date}
          </Text>
        </>
      ) : (
        <ActivityIndicator size="large" color="blue" animating />
      )}
    </View>
  );
};

export default DetailView;
