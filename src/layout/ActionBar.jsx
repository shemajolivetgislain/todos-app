import { useEffect, useState } from "react";
import ActionButton from "../components/buttons/ActionButton";
import { IoMoonOutline } from "react-icons/io5";
import { CiLight } from "react-icons/ci";
import LanguageAction from "./child/LanguageAction";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguageChange } from "../app/features/actionSlice";

const ActionBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { languageChange } = useSelector((state) => state.todosActions);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });

  const toggleThemeMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLanguageChange = () => {
    dispatch(setLanguageChange(!languageChange));
  };

  return (
    <>
      <div className="flex gap-2">
        <ActionButton onClick={toggleThemeMode}>
          {darkMode ? (
            <CiLight
              className="text-whiteTheme-primaryColor dark:text-darkTheme-textColor"
              size={21}
            />
          ) : (
            <IoMoonOutline
              className="text-whiteTheme-primaryColor dark:text-darkTheme-textColor"
              size={21}
            />
          )}
        </ActionButton>
        <ActionButton className="!relative" onClick={handleLanguageChange}>
          <p className="text-sm text-whiteTheme-primaryColor font-semibold dark:text-darkTheme-textColor">
            {t("languageType")}
          </p>
        </ActionButton>
      </div>
      {languageChange && <LanguageAction />}
    </>
  );
};

export default ActionBar;
