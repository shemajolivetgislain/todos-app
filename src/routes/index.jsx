import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import DashboardLayout from "../layout";
import TodosPage from "../pages/Home/ToDos";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/todos" element={<TodosPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
