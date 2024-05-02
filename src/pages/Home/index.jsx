import MainHolder from "../../components/MainHolder";
import DashboardHeader from "../../components/sections/DashboardHeader";
import TodosFilters from "../../components/sections/TodosFilters";

const HomePage = () => {
  return (
    <MainHolder className={"flex flex-col  gap-5"}>
      <DashboardHeader />
      <TodosFilters />
    </MainHolder>
  );
};

export default HomePage;
