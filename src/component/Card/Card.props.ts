import { Item } from "../../type/Item";

export interface CardProps {
  item: Item;
  onEnter: (id: number, type?: string) => void;
}
