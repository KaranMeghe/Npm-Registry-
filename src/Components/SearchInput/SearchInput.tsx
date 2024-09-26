import { useState } from "react";
import { Input } from "../index";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [term, setTerm] = useState<string>("");
  const navigate = useNavigate(); //Programatic Navigation

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
    term && navigate(`/search?term=${term}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        className="border border-pink-500 px-3 py-1 text-pink-500 placeholder:italic placeholder:text-pink-400"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
