import Input from "../../components/inputs";
import { IoIosSearch } from "react-icons/io";

const SearchField = () => {
  return (
    <div className="w-[30%]">
      <div className="relative">
        {" "}
        <Input
          className={`!border-none !bg-whiteTheme-lightAccent !py-2`}
          placeholder={"Search"}
        />
        <IoIosSearch
          size={23}
          className="text-whiteTheme-primaryColor absolute inset-y-2 right-4 cursor-pointer flex items-center pointer-events-none"
        />
      </div>
    </div>
  );
};

export default SearchField;
