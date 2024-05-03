import { useSelector } from "react-redux";

const TodosLink = () => {
  const { allTodosSize, incompleteTodosSize, completeTodosSize } = useSelector(
    (state) => state.todos
  );

  const totalTodos = allTodosSize;
  const incompleteTodos = incompleteTodosSize;
  const completeTodos = completeTodosSize;

  const todosPathLink = {
    links: [
      {
        title: "All Tasks",
        path: "all",
        size: totalTodos,
      },
      {
        title: "To do",
        path: "todo",
        size: incompleteTodos,
      },
      {
        title: "Completed",
        path: "completed",
        size: completeTodos,
      },
    ],
  };

  return todosPathLink;
};

export default TodosLink;
