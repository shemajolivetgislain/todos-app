import Input from "../../components/inputs";
import { IoIosSearch } from "react-icons/io";
import { useTranslation } from "react-i18next";

const SearchField = () => {
  const { t } = useTranslation();
  return (
    <div className="w-[30%] max-md:w-[35%] max-sm:w-[60%]">
      <div className="relative">
        {" "}
        <Input
          className={`!border-none !bg-whiteTheme-lightAccent !py-2 dark:!bg-darkTheme-borderColor`}
          placeholder={t("searchPlaceholder")}
          type="text"
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
