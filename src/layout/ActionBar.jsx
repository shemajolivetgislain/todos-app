import ActionButton from "../components/buttons/ActionButton";
import { IoMoonOutline } from "react-icons/io5";

const ActionBar = () => {
  return (
    <div className="flex gap-2">
      <ActionButton>
        <IoMoonOutline className="text-whiteTheme-primaryColor" size={21} />
      </ActionButton>
      <ActionButton>
        <p className="text-sm text-whiteTheme-primaryColor font-semibold">
          Eng
        </p>
      </ActionButton>
    </div>
  );
};

export default ActionBar;
