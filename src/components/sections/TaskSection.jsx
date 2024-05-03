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

  console.log(todosData);
  return (
    <section className="w-full">
      <main className="flex grow items-center gap-3">
        <TaskCard
          title="Todos"
          taskNumber={1}
          detail="Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur taciti nibh"
          className="text-whiteTheme-primaryColor bg-red-100"
        />
        <TaskCard
          title="In Progress"
          taskNumber={1}
          detail="Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur taciti nibh"
          className="text-whiteTheme-primaryColor bg-blue-100"
        />
      </main>
    </section>
  );
};

export default TaskSection;
