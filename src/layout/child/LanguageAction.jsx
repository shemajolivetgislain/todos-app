import { useTranslation } from "react-i18next";
import { setLanguageChange } from "../../app/features/actionSlice";
import { useDispatch } from "react-redux";

const LanguageAction = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="py-2 px-6 flex flex-col gap-2 absolute right-3 mt-32 bg-whiteTheme-backgroundColor shadow-sm border-2 rounded-md dark:bg-darkTheme-secondColor dark:text-darkTheme-textColor">
      <span
        className="cursor-pointer"
        onClick={() => {
          changeLanguage("en");
          dispatch(setLanguageChange(false));
        }}
      >
        <p className="font-medium hover:text-whiteTheme-primaryColor">
          English
        </p>
      </span>
      <hr />
      <span
        className="cursor-pointer"
        onClick={() => {
          {
            changeLanguage("fr");
            dispatch(setLanguageChange(false));
          }
        }}
      >
        <p className="font-medium hover:text-whiteTheme-primaryColor">French</p>
      </span>
    </div>
  );
};

export default LanguageAction;
