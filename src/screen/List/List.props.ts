import { Item } from "../../type/Item";
import { Option } from "../../type/Options";

export interface ListProps {
  isLoading: boolean;
  isVisible: boolean;
  option: Option | undefined;
  options: Option[];
  items: Item[];
  handleOpen: () => void;
  handleClose: () => void;
  handleSelect: (option: Option) => void;
  handleEnter: (id: number) => void;
}
