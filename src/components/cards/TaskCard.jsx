import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiMessageSquareEdit } from "react-icons/bi";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDeleteTodoMutation, useLazyGetAllToDosQuery } from "../../app/api";
import { toast } from "react-toastify";
import EditTaskModal from "../../pages/Home/EditTaskModal";
import { useTranslation } from "react-i18next";

const TaskCard = ({ title, taskNumber, detail, className, onClick }) => {
  const [openAction, setOpenAction] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const { singleTodo } = useSelector((state) => state.todos);
  const { t } = useTranslation();
  const toggleAction = () => {
    setOpenAction(!openAction);
  };

  const [getAllToDos] = useLazyGetAllToDosQuery();

  const [
    deleteTodo,
    {
      isLoading: isDeleteLoading,
      isSuccess: isDeleteSuccess,
      isError: isDeleteError,
      error: deleteError,
    },
  ] = useDeleteTodoMutation();

  // Handle Delete function
  const handleDelete = () => {
    deleteTodo({ id: singleTodo?.id });
  };
  // Handle Edit function
  const handleEdit = () => {
    setOpenEditModal(true);
    setOpenAction(false);
  };
  // Fetch all todos again
  useEffect(() => {
    if (isDeleteSuccess) {
      toast.success("Todo deleted successfully", {
        autoClose: 2000,
        hideProgressBar: true,
        position: "top-center",
      });
      getAllToDos();
      setOpenAction(false);
    } else if (isDeleteError) {
      toast.error(deleteError?.data?.message, {
        autoClose: 2000,
        hideProgressBar: true,
        position: "top-center",
      });
      setOpenAction(false);
    }
  }, [deleteError?.data?.message, getAllToDos, isDeleteError, isDeleteSuccess]);

  return (
    <>
      <div className=" flex flex-col gap-3 rounded-md shadow-sm shadow-sky-100 border-2 py-8 px-6 h-60 bg-whiteTheme-backgroundColor dark:bg-darkTheme-primaryColor dark:border-darkTheme-borderColor dark:shadow-darkTheme-secondColor">
        <header className="flex items-center justify-between w-full">
          <h1 className={`${className} p-2 font-medium text-sm rounded-md`}>
            {title}
          </h1>
          <HiOutlineDotsVertical
            size={20}
            className="relative dark:text-darkTheme-textColor"
            onClick={() => {
              toggleAction();
              onClick();
            }}
          />
        </header>
        <main className="flex flex-col gap-3 ">
          <h1 className="text-whiteTheme-primaryColor font-semibold text-xl">
            {t("taskCardTitle")} <span>{taskNumber}</span>
          </h1>
          <hr />
          <p className="text-whiteTheme-accentColor font-normal text-sm dark:text-darkTheme-textColor">
            {detail}
          </p>
        </main>
        {openAction && (
          <span className="mt-7 p-0 m-0 self-end fixed flex flex-col gap-2 rounded-md shadow-sm shadow-sky-200 py-4 px-6 bg-whiteTheme-backgroundColor dark:bg-darkTheme-secondColor dark:border-darkTheme-borderColor dark:shadow-darkTheme-secondColor">
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleEdit}
            >
              <BiMessageSquareEdit
                size={20}
                className="text-whiteTheme-primaryColor dark:text-purple-100"
              />
              <p className="text-whiteTheme-primaryColor dark:text-purple-100">
                {t("Edit")}
              </p>
            </div>
            <hr />
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleDelete}
            >
              <MdOutlineDeleteSweep
                size={20}
                className="text-red-700 dark:text-red-200"
              />
              <p className="text-red-700 dark:text-red-200">
                {isDeleteLoading ? "Deleting ..." : t("Delete")}
              </p>
            </div>
          </span>
        )}
      </div>
      {openEditModal && (
        <EditTaskModal
          closeModal={() => {
            setOpenEditModal(false);
          }}
        />
      )}
    </>
  );
};

TaskCard.propTypes = {
  title: PropTypes.string,
  taskNumber: PropTypes.number,
  detail: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default TaskCard;
