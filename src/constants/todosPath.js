import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TodosLink = () => {
  const { allTodosSize, incompleteTodosSize, completeTodosSize } = useSelector(
    (state) => state.todos
  );
  const { t } = useTranslation();

  const totalTodos = allTodosSize;
  const incompleteTodos = incompleteTodosSize;
  const completeTodos = completeTodosSize;

  const todosPathLink = {
    links: [
      {
        title: t("AllTasks"),
        path: "all",
        size: totalTodos,
      },
      {
        title: t("ToDoTasks"),
        path: "todo",
        size: incompleteTodos,
      },
      {
        title: t("CompletedTasks"),
        path: "completed",
        size: completeTodos,
      },
    ],
  };

  return todosPathLink;
};

export default TodosLink;
