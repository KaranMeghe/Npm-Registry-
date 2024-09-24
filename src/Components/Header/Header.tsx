import { Link } from "react-router-dom";
import { Input } from "../index";
const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center border border-gray-300 m-5 py-2 px-5">
        <Link to="/">
          <span className="text-purple-500 font-bold  text-2xl ">
            Npm Registey
          </span>
        </Link>
        <Input
          type="text"
          placeholder="Search"
          className="border border-gray-300 px-3 py-1"
        />
      </nav>
    </header>
  );
};

export default Header;
