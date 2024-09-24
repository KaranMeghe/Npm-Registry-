import { Link } from "react-router-dom";
import { SearchInput } from "../index";

const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center  border-double border-4 border-indigo-500  m-5 py-2 px-5">
        <Link to="/">
          <span className="text-purple-500 font-bold  text-2xl ">
            Npm Registrey
          </span>
        </Link>
        <SearchInput />
      </nav>
    </header>
  );
};

export default Header;

// border-double border-4 border-sky-500
// border border-gray-300
