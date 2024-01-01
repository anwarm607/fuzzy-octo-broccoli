import { Input } from "./Input";
import {SearchIcon} from "../assets";


export const SearchInput = () => {
  return (
    <div>
      <Input placeholder="Search by products" color="black" rightIcon={<SearchIcon className="opacity-50" />} className={"w-96"} />
    </div>
  );
};