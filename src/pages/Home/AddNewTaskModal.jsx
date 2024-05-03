import Modal from "../../components/Modal";
import PropTypes from "prop-types";
import { Controller, useForm } from "react-hook-form";
import Input from "../../components/inputs";
import Button from "../../components/buttons";
import { useCreateTodoMutation } from "../../app/api";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AddNewTaskModal = ({ closeModal }) => {
  const {
    control,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const [
    createTodo,
    {
      isLoading: isCreatingTodoLoading,
      isSuccess: isCreatingTodoSuccess,
      isError: isCreatingTodoError,
      data: createTodoData,
    },
  ] = useCreateTodoMutation();
  const onSubmitTodo = (data) => {
    console.log(data);
    createTodo({ todo: data.todo, completed: false, userId: 5 });
  };

  // Handle success and error
  useEffect(() => {
    if (isCreatingTodoSuccess) {
      toast.success(`Todo ${createTodoData?.todo} added successfully`, {
        autoClose: 1000,
        hideProgressBar: true,
        position: "top-center",
      });
      closeModal();
    }
    if (isCreatingTodoError) {
      toast.error("Something went wrong", {
        autoClose: 1000,
        hideProgressBar: true,
        position: "top-center",
      });
      closeModal();
    }
  }, [closeModal, createTodoData?.todo, isCreatingTodoError, isCreatingTodoSuccess]);
  return (
    <Modal
      title={"Add new task"}
      toggleFunction={closeModal}
      className={"!h-[37%]"}
    >
      <form
        action=""
        onSubmit={handleSubmit(onSubmitTodo)}
        className="flex flex-col gap-5 mt-6 "
      >
        <Controller
          name="todo"
          control={control}
          rules={{ required: "To dos is required" }}
          render={({ field }) => (
            <>
              <Input {...field} type="text" placeholder="Add your task" />
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
            value={isCreatingTodoLoading ? "Adding ..." : "Add todo"}
          />
          <Button
            className="!bg-white !border-2 !border-red-700 !text-red-700 !py-1 !text-lg hover:!bg-red-700 hover:!text-whiteTheme-secondColor"
            onClick={closeModal}
            value={"cancel"}
          />
        </div>
      </form>
    </Modal>
  );
};

AddNewTaskModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default AddNewTaskModal;
