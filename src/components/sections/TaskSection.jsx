import { useEffect } from "react";
import { useLazyGetAllToDosQuery } from "../../app/api";
import TaskCard from "../cards/TaskCard";

const TaskSection = () => {
  const [
    getAllToDos,
    {
      isLoading: isTodosLoading,
      isError: isTodosError,
      isSuccess: isTodosSuccess,
      data: todosData,
    },
  ] = useLazyGetAllToDosQuery();
  useEffect(() => {
    getAllToDos();
  }, [getAllToDos]);

  console.log(todosData?.todos);
  return (
    <section className="w-full">
      <main className="grid grid-cols-5 items-center gap-8">
        {isTodosLoading ? (
          <p>Loading ....</p>
        ) : isTodosSuccess ? (
          <>
            {todosData?.todos?.length > 0 ? (
              todosData?.todos?.map((todo, index) => (
                <TaskCard
                  title={todo.completed === true ? "Completed" : "To Do"}
                  taskNumber={index + 1}
                  detail={todo.todo}
                  className={todo.completed === true ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                  key={todo?.id}
                />
              ))
            ) : (
              <span>
                <p>You have an empty to dos</p>
              </span>
            )}
          </>
        ) : isTodosError ? (
          <span>
            <p>{"Failed to load your tasks"}</p>
          </span>
        ) : null}
      </main>
    </section>
  );
};

export default TaskSection;
