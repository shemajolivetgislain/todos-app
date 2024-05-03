import MainHolder from "../../components/MainHolder";
import DashboardHeader from "../../components/sections/DashboardHeader";
import TaskSection from "../../components/sections/TaskSection";
import TodosFilters from "../../components/sections/TodosFilters";

const HomePage = () => {
  return (
    <MainHolder className={"flex flex-col  gap-5"}>
      <DashboardHeader />
      <TodosFilters />
      <TaskSection />
    </MainHolder>
  );
};

export default HomePage;
