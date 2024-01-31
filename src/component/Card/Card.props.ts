import { Item } from "../../type/Item";

export interface CardProps {
  item: Item;
  onEnter: (item: Item) => void;
}
