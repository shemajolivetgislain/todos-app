import { useState, useEffect } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <section className="w-full ">
      <header className="flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
        <h1 className="text-3xl max-sm:text-xl font-bold text-whiteTheme-primaryColor">
          {t("title")}
        </h1>
        {/* Display current time and date */}
        <span className="flex gap-3 items-center bg-purple-100  rounded-md p-3 dark:bg-darkTheme-secondColor dark:text-darkTheme-textColor">
          <div className="rounded-full bg-green-500 w-3 h-3"></div>
          <p className="font-medium">{moment(formattedDate).format("LL")},</p>
          <span className="text-whiteTheme-accentColor font-medium text-sm dark:text-emerald-200">
            {formattedTime}
          </span>
        </span>
      </header>
    </section>
  );
};

export default DashboardHeader;
