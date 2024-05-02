import Logo from "../assets/logo/app_logo.svg";
// import { GoHome } from "react-icons/go";
import { TbSmartHome } from "react-icons/tb";
import { LuFolderMinus } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { HiOutlineUser } from "react-icons/hi2";

export const navLinks = {
  logo: Logo,
  links: [
    {
      name: "Dashboard",
      path: "/",
      icon: TbSmartHome,
    },
    {
      name: "To dos",
      path: "/todos",
      icon: LuFolderMinus,
    },
  ],
  footerLinks: [
    {
      name: "Settings",
      path: "/setting",
      icon: LuSettings,
    },
    {
      name: "Profile",
      path: "/profile",
      icon: HiOutlineUser,
    },
  ],
};
