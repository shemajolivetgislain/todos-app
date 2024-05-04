import Modal from "../../components/Modal";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import { useUpdateTodoMutation } from "../../app/api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import ButtonLoader from "../../components/loader/Loaders";

const EditTaskModal = ({ closeModal }) => {
  const { singleTodo } = useSelector((state) => state.todos);
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [
    updateTodo,
    {
      isLoading: isEditToLoading,
      isSuccess: isUpdatingSuccess,
      isError: isEdtingError,
    },
  ] = useUpdateTodoMutation();
  const onEditTodo = (data) => {
    updateTodo({
      id: singleTodo?.id,
      todo: data.todo,
    });
  };

  //   // Handle success and error
  useEffect(() => {
    if (isUpdatingSuccess) {
      toast.success("Todo updated successfully", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "top-center",
      });
      closeModal();
    }
    if (isEdtingError) {
      toast.error("Error updating todo");
    }
  }, [isUpdatingSuccess, isEdtingError, closeModal]);

  return (
    <Modal
      title={"Edit New Task"}
      toggleFunction={closeModal}
      className={"!h-[37%]"}
    >
      <form
        action=""
        onSubmit={handleSubmit(onEditTodo)}
        className="flex flex-col gap-5 mt-6 "
      >
        <Controller
          name="todo"
          control={control}
          defaultValue={singleTodo?.todo}
          rules={{ required: "To dos is required" }}
          render={({ field }) => (
            <>
              <Input {...field} type="text" defaultValue={singleTodo?.todo} />
              {errors.todo && (
                <p className="text-red-600 text-[13px]">
                  {errors.todo.message}
                </p>
              )}
            </>
          )}
        />
        <div className="flex items-center gap-3">
          <Button
            submit
            className=" !py-1 !text-lg"
            primary
            value={isEditToLoading ? "Updating ..." : "Edit todo"}
          />
          <Button
            className="!bg-white !border-2 !border-red-700 !text-red-700 !py-1 !text-lg hover:!bg-red-700 hover:!text-whiteTheme-secondColor dark:!bg-red-900 dark:!text-darkTheme-textColor"
            onClick={closeModal}
            value={"cancel"}
          />
        </div>
      </form>
    </Modal>
  );
};

EditTaskModal.propTypes = {
  closeModal: PropTypes.func,
};

export default EditTaskModal;
