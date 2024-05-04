import { useState, useEffect } from "react";
import moment from "moment";

const DashboardHeader = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval
  }, []);
  // Get date and time separately
  const formattedDate = currentTime.toLocaleDateString();
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <section className="w-full ">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-whiteTheme-primaryColor">
          Todos App Site
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
