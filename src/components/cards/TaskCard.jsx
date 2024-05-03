import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";

const TaskCard = ({ title, taskNumber, detail, className }) => {
  return (
    <div className=" flex flex-col gap-3 rounded-md shadow-sm shadow-sky-100 border-2 py-8 px-6 h-56 bg-whiteTheme-backgroundColor">
      <header className="flex items-center justify-between w-full">
        <h1 className={`${className} p-2 font-medium text-sm rounded-md`}>
          {title}
        </h1>
        <HiOutlineDotsVertical size={20} />
      </header>

      <main className="flex flex-col gap-3 ">
        <h1 className="text-whiteTheme-primaryColor font-semibold text-xl">
          Task <span>{taskNumber}</span>
        </h1>
        <hr />
        <p className="text-whiteTheme-accentColor font-normal text-sm">
          {detail}
        </p>
      </main>
    </div>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  taskNumber: PropTypes.number,
  detail: PropTypes.string,
  className: PropTypes.string,
};

export default TaskCard;
