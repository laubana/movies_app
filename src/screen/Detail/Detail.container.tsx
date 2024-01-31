import { useNavigation, useRoute } from "@react-navigation/native";
import DetailView from "./Detail.view";
import { Item } from "../../type/Item";
import { useEffect, useLayoutEffect, useState } from "react";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk5YTVkMTE5MGM4ODUwM2ZmZjFiZTE2OWQyMDc1YSIsInN1YiI6IjY0MzVjZmMzOWFjNTM1MDEyOWIzZTUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S4auzz9H97Kbz19Pd1DLvQ0Sc8GpncsicTg16UPfKtk";

const Detail = (): JSX.Element => {
  const { type, id } = useRoute().params as {
    type: string;
    id: number;
  };
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [item, setItem] = useState<Item>();

  useEffect(() => {
    const main = async () => {
      if (type && id) {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}`,

          {
            method: "GET",
            headers: { Authorization: `Bearer ${API_KEY}` },
          }
        );
        const json = (await response.json()) as Item;

        setItem(json);
        setIsLoading(false);
      }
    };
    main();
  }, [type, id]);

  useLayoutEffect(() => {
    if (item) {
      navigation.setOptions({
        title: item.title || item.name,
      });
    }
  }, [item]);

  const props = { isLoading, item };
  return <DetailView {...props} />;
};

export default Detail;
