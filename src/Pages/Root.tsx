import { Outlet } from "react-router-dom";
import { Header } from "../Components";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
