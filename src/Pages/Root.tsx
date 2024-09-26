import { Outlet } from "react-router-dom";
import { Header } from "../Components";

const Root = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% p-2"></div>
      <div className="container mx-auto px-20">
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Root;
