import { Link } from "react-router-dom";
import { navLinks } from "../constants/navLinks";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <section className="min-h-screen flex flex-col gap-16 h-screen w-[10vh]  shadow-sm ">
      <header className="p-3">
        <img src={navLinks.logo} alt="Logo" className="w-10 h-10" />
      </header>
      <main className="h-full flex flex-col justify-between">
        <nav>
          <ul className="flex flex-col gap-3">
            {navLinks.links.map((link, index) => (
              <li
                key={index}
                className={`${
                  pathname === link.path
                    ? "bg-purple-50 border-l-4 border-whiteTheme-primaryColor text-whiteTheme-primaryColor"
                    : "text-whiteTheme-accentColor"
                } p-3 `}
              >
                <Link
                  to={link.path}
                  title={link.name}
                  className="custom-tooltip"
                >
                  <link.icon size={23} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <footer className="py-7 border-t-2 border-purple-100">
          <ul className="flex flex-col gap-6 ">
            {navLinks.footerLinks.map((link, index) => (
              <li
                key={index}
                className={`${
                  pathname === link.path
                    ? "bg-purple-50 border-l-4 border-whiteTheme-primaryColor text-whiteTheme-primaryColor"
                    : "text-whiteTheme-accentColor"
                } px-3 `}
              >
                {" "}
                <Link
                  to={link.path}
                  title={link.name}
                  className="custom-tooltip"
                >
                  <link.icon size={23} />
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      </main>
    </section>
  );
};

export default SideBar;
