import { Dispatch, SetStateAction } from "react";
import { Option } from "../../type/Options";
import { Item } from "../../type/Item";

export interface SearchProps {
  isSearched: boolean;
  isVisible: boolean;
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  option: Option | undefined;
  options: Option[];
  items: Item[];
  handleOpen: () => void;
  handleClose: () => void;
  handleSelect: (option: Option) => void;
  handleEnter: (id: number, type?: string) => void;
  handleSearch: () => void;
}
