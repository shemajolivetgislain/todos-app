import ActionBar from "./ActionBar";
import SearchField from "./child/SearchField";

const NavBar = () => {
  return (
    <div className="w-full h-20 shadow-sm p-4 bg-whiteTheme-backgroundColor sticky flex justify-between items-center dark:bg-darkTheme-primaryColor dark:border-b-2 dark:border-darkTheme-borderColor">
      <SearchField />
      <ActionBar />
    </div>
  );
};

export default NavBar;
