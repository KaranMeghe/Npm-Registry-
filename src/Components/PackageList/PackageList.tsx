import { PackageSummary } from "../../api/types/packageSummary";
import { Link } from "react-router-dom";

interface PackageListProps {
  pack: PackageSummary;
  key: string;
}

const PackageListItem = ({ pack }: PackageListProps) => {
  const renderdKeywords = (pack.keywords || []).map((keyword) => {
    return (
      <div
        className="border py-0.5 px-1 text-xs text-center bg-slate-200 rounded"
        key={keyword}
      >
        {keyword}
      </div>
    );
  });
  return (
    <article className="border p-4 rounded flex justify-between items-center">
      <div className="flex flex-col gap-2">
        <Link to={`/packages/${pack.name}`} className="text-xl font-bold">
          {pack.name}
        </Link>
        <p className="text-sm text-gray-500">{pack.description}</p>
        <div className="flex gap-2">{renderdKeywords}</div>
      </div>

      <div className="mr-6">
        <Link to={`/packages/${pack.name}`}>
          <button className="btn px-2 rounded border-double border-4 bg-indigo-500 border-white text-white shadow-xl shadow-gray-300 ">
            View
          </button>
        </Link>
      </div>
    </article>
  );
};

export default PackageListItem;
