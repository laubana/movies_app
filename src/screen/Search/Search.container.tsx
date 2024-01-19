import { useState } from "react";
import SearchView from "./Search.view";
import { Option } from "../../type/Options";
import { Item } from "../../type/Item";
import {
  NavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { Navigation } from "../../type/Navigation";

const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Yzk5YTVkMTE5MGM4ODUwM2ZmZjFiZTE2OWQyMDc1YSIsInN1YiI6IjY0MzVjZmMzOWFjNTM1MDEyOWIzZTUzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.S4auzz9H97Kbz19Pd1DLvQ0Sc8GpncsicTg16UPfKtk";

const Search = (): JSX.Element => {
  const navigation = useNavigation<NavigationContainerRef<Navigation>>();

  const [isSearched, setIsSearched] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");
  const [option, setOption] = useState<Option>({
    label: "Movie",
    value: "movie",
  });
  const [options, setOptions] = useState<Option[]>([
    { label: "Movie", value: "movie" },
    { label: "Multi", value: "multi" },
  ]);
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

  const handleEnter = (id: number, type?: string) => {
    navigation.navigate("Detail", {
      type: type === "movie" ? "movies" : type === "tv" ? "shows" : "movies",
      id: id,
    });
  };

  const handleSearch = async () => {
    if (keyword) {
      setIsSearched(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${option.value}?query=${keyword}`,

        {
          method: "GET",
          headers: { Authorization: `Bearer ${API_KEY}` },
        }
      );
      const json = (await response.json()) as {
        results: Item[];
      };

      if (option.value === "movie") {
        setItems(json.results);
      } else {
        setItems(
          json.results.filter(
            (item) => item.media_type === "movie" || item.media_type === "tv"
          )
        );
      }
    }
  };

  const props = {
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
  };
  return <SearchView {...props} />;
};

export default Search;
