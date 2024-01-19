import {
  NavigationContainerRef,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import ListView from "./List.view";
import { useEffect, useState } from "react";
import { Option } from "../../type/Options";
import { Item } from "../../type/Item";
import { Navigation } from "../../type/Navigation";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk5YTVkMTE5MGM4ODUwM2ZmZjFiZTE2OWQyMDc1YSIsInN1YiI6IjY0MzVjZmMzOWFjNTM1MDEyOWIzZTUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S4auzz9H97Kbz19Pd1DLvQ0Sc8GpncsicTg16UPfKtk";

const List = (): JSX.Element => {
  const { type } = useRoute().params as {
    type: string;
  };
  const navigation = useNavigation<NavigationContainerRef<Navigation>>();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [option, setOption] = useState<Option | undefined>();
  const [options, setOptions] = useState<Option[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSelect = (option: Option) => {
    setIsVisible(false);
    setOption(option);
  };

  const handleEnter = (id: number) => {
    navigation.navigate("Detail", { type: type, id: id });
  };

  useEffect(() => {
    setOption(
      type === "movies"
        ? { label: "Now Play", value: "now_playing" }
        : { label: "Airing Today", value: "airing_today" }
    );
    setOptions(
      type === "movies"
        ? [
            { label: "Now Play", value: "now_playing" },
            { label: "Popular", value: "popular" },
            { label: "Top Rated", value: "top_rated" },
            { label: "Upcoming", value: "upcoming" },
          ]
        : [
            { label: "Airing Today", value: "airing_today" },
            { label: "On the Air", value: "on_the_air" },
            { label: "Popular", value: "popular" },
            { label: "Top Rated", value: "top_rated" },
          ]
    );
  }, [type]);

  useEffect(() => {
    const main = async () => {
      if (option?.value) {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/${type === "movies" ? "movie" : "tv"}/${
            option.value
          }`,

          {
            method: "GET",
            headers: { Authorization: `Bearer ${API_KEY}` },
          }
        );
        const json = (await response.json()) as {
          results: Item[];
        };

        setItems(json.results);
        setIsLoading(false);
      }
    };
    main();
  }, [option]);

  const props = {
    isLoading,
    isVisible,
    option,
    options,
    items,
    handleOpen,
    handleClose,
    handleSelect,
    handleEnter,
  };
  return <ListView {...props} />;
};

export default List;
