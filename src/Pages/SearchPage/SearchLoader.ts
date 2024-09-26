import { searchPackages } from "../../api/queries/searchPackages";

export async function SearchLoader({ request }: { request: Request }) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term");

  if (!term) {
    throw new Error("Search Term Must Be Provided");
  }
  const results = await searchPackages(term);
  console.log(results);
  return { searchResults: results };
}
