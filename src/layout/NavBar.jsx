import ActionBar from "./ActionBar";
import SearchField from "./child/SearchField";

const NavBar = () => {
  return (
    <div className="w-full h-20 shadow-sm p-4 bg-whiteTheme-backgroundColor sticky flex justify-between items-center">
      <SearchField />
      <ActionBar />
    </div>
  );
};

export default NavBar;
