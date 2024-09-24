import { Outlet } from "react-router-dom";
import { Header } from "../Components";

const Root = () => {
  return (
    <>
      <header>
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% p-2"></div>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
