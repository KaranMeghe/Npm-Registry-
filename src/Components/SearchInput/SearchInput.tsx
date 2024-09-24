import { useState } from "react";
import { Input } from "../index";

const SearchInput = () => {
  const [term, setTerm] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        className="border border-gray-300 px-3 py-1"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default SearchInput;
