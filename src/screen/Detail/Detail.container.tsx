import { useRoute } from "@react-navigation/native";
import DetailView from "./Detail.view";
import { Item } from "../../type/Item";
import { useEffect, useState } from "react";

const Detail = (): JSX.Element => {
  const { type, id } = useRoute().params as {
    type: string;
    id: number;
  };

  const [item, setItem] = useState<Item>();

  const props = {};
  return <DetailView {...props} />;
};

export default Detail;
