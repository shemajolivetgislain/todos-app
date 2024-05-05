import { useEffect, useState } from "react";
import TodosLink from "../../constants/todosPath";
import Button from "../buttons";
import { IoMdAdd } from "react-icons/io";
import AddNewTaskModal from "../../pages/Home/AddNewTaskModal";
import TaskSection from "./TaskSection";
import { useLazyGetAllToDosQuery } from "../../app/api";
import {
  setTodos,
  setAllTodos,
  setCompleteTodos,
  setImcompleteTodos,
} from "../../app/features/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TodosFilters = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // Path links
  const todosPathLink = TodosLink();
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const { todos } = useSelector((state) => state.todos);

  const [
    getAllToDos,
    { isLoading: isTodosLoading, isSuccess: isTodosSuccess, data: todosData },
  ] = useLazyGetAllToDosQuery();
  useEffect(() => {
    getAllToDos();
  }, [getAllToDos]);

  // SAVING DATA INTO GLOBAL STATE
  useEffect(() => {
    if (isTodosSuccess) {
      dispatch(setTodos(todosData?.todos));
      dispatch(setAllTodos(todosData?.todos?.length));
      dispatch(
        setCompleteTodos(
          todosData?.todos?.filter((todo) => todo.completed === true).length
        )
      );
      dispatch(
        setImcompleteTodos(
          todosData?.todos?.filter((todo) => todo.completed === false).length
        )
      );
    }
  }, [isTodosSuccess, todosData, dispatch]);

  //   Handling changing tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab.path);
    if (tab.path === "all") {
      dispatch(setTodos(todosData?.todos));
      dispatch(setAllTodos(todosData?.todos?.length));
    } else if (tab.path === "completed") {
      const filtered = todosData?.todos?.filter(
        (todo) => todo.completed === true
      );

      dispatch(setTodos(filtered));
    } else if (tab.path === "todo") {
      const filtered = todosData?.todos?.filter(
        (todo) => todo.completed === false
      );
      dispatch(setTodos(filtered));
    }
  };

  return (
    <section className="w-full flex flex-col gap-4">
      <div className="w-full h-20 rounded-md bg-whiteTheme-backgroundColor shadow-sm shadow-purple-100 px-7 max-sm:px-3 flex justify-between items-center dark:bg-darkTheme-primaryColor dark:shadow-darkTheme-borderColor ">
        <ul className=" flex items-center gap-9 pt-3 max-md:gap-4 max-sm:gap-2">
          {todosPathLink.links.map((tab, index) => (
            <li
              key={index}
              className={`${
                tab.path === activeTab &&
                "border-b-[5px] border-whiteTheme-primaryColor text-whiteTheme-primaryColor font-semibold"
              } py-5 cursor-pointer text-whiteTheme-accentColor max-sm:text-sm`}
              onClick={() => handleTabClick(tab)}
            >
              {tab.title}{" "}
              <span className="ml-1 p-2 max-md:p-1 max-sm:text-sm bg-whiteTheme-lightAccent rounded-md dark:bg-darkTheme-secondColor dark:text-darkTheme-textColor ">
                {tab.size}
              </span>
            </li>
          ))}
        </ul>
        <Button
          className={
            "!border-[1px] !border-whiteTheme-accentColor !bg-white !text-whiteTheme-accentColor hover:!bg-whiteTheme-primaryColor hover:!text-whiteTheme-secondColor dark:!bg-darkTheme-secondColor dark:!text-darkTheme-textColor dark:hover:!bg-darkTheme-primaryColor dark:hover:!text-darkTheme-accentColor max-md:!px-2 max-sm:hidden"
          }
          value={
            <span className="flex gap-2 items-center">
              <IoMdAdd />
              <p className="max-md:hidden"> {t("taskAddTitle")}</p>
            </span>
          }
          onClick={() => setShowModal(true)}
        />
      </div>
      {isTodosLoading ? (
        <span>
          <p>Loading .....</p>
        </span>
      ) : isTodosSuccess ? (
        <TaskSection data={todos} />
      ) : (
        <span>
          <p>Failed to load todos</p>
        </span>
      )}
      {showModal && <AddNewTaskModal closeModal={() => setShowModal(false)} />}
    </section>
  );
};

export default TodosFilters;
