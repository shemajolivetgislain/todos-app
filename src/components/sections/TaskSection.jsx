import { useDispatch } from "react-redux";
import { setSingleTodo } from "../../app/features/todoSlice";
import TaskCard from "../cards/TaskCard";
import PropTypes from "prop-types";

const TaskSection = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = (data) => {
    dispatch(setSingleTodo(data));
  };
  return (
    <section className="w-full  mb-8">
      <main className="grid grid-cols-5 items-center gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data?.length > 0 &&
          data?.map((todo, index) => (
            <TaskCard
              title={todo.completed === true ? "Completed" : "To Do"}
              taskNumber={index + 1}
              detail={todo.todo}
              className={
                todo.completed === true
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }
              key={todo?.id}
              onClick={() => handleClick(todo)}
            />
          ))}
        {data?.length === 0 && (
          <span>
            <p>You have no pending to dos</p>
          </span>
        )}
      </main>
    </section>
  );
};

TaskSection.propTypes = {
  data: PropTypes.array,
};

export default TaskSection;
