import { useState } from "react";
import { todosPathLink } from "../../constants/todosPath";


const TodosFilters = () => {
  const [activeTab, setActiveTab] = useState("all");

  //   Handling changing tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab.path);
  };
  return (
    <section className="w-full h-20 rounded-md bg-whiteTheme-backgroundColor shadow-sm shadow-purple-100 px-7">
      <ul className=" flex items-center gap-9 pt-3">
        {todosPathLink.links.map((tab, index) => (
          <li
            key={index}
            className={`${
              tab.path === activeTab &&
              "border-b-[5px] border-whiteTheme-primaryColor text-whiteTheme-primaryColor font-semibold"
            } py-5 cursor-pointer text-whiteTheme-accentColor`}
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}{" "}
            <span className="ml-1 p-2 bg-whiteTheme-lightAccent rounded-md">
              {tab.size}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodosFilters;
