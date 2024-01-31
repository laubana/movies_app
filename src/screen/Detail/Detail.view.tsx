import { ActivityIndicator, Image, ScrollView, Text, View } from "react-native";
import { DetailProps } from "./Detail.props";
import styles from "./Detail.style";
import Ionicons from "@expo/vector-icons/Ionicons";

const DetailView = (props: DetailProps) => {
  const { isLoading, item } = props;

  return (
    <ScrollView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        {item && !isLoading ? (
          <>
            <Text style={styles.title}>{item?.title || item?.name}</Text>
            <View style={styles.imageContainer}>
              {item.poster_path || item.profile_path ? (
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${
                      item.poster_path || item.profile_path
                    }`,
                  }}
                  style={styles.image}
                />
              ) : (
                <Ionicons name="image" size={50} />
              )}
            </View>
            <Text style={styles.body}>{item.overview || "N/A"}</Text>
            <Text style={styles.body}>
              Popularity: {item.popularity}
              {(item.release_date || item.first_air_date) && (
                <> | Release Date: {item.release_date || item.first_air_date}</>
              )}
            </Text>
          </>
        ) : (
          <ActivityIndicator size="large" color="teal" animating />
        )}
      </View>
    </ScrollView>
  );
};

export default DetailView;
