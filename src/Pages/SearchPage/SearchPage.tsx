import { useLoaderData } from "react-router-dom";
import { SearchLoaderResult } from "./SearchLoader";
import { PackageListItem } from "../../Components";

const SearchPage = () => {
  const data = useLoaderData() as SearchLoaderResult;
  console.log(data);

  return (
    <>
      <h1 className="mx-2 text-2xl">Search Results</h1>
      {data.searchResults.map((search) => {
        return <PackageListItem pack={search} key={search.name} />;
      })}
    </>
  );
};

export default SearchPage;
