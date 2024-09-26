import { PackageSummary } from "../types/packageSummary";

// Update the SearchResponse interface for proper typing
interface SearchResponse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[]; // Note: it should be 'keywords' not 'keyword'
    };
  }[];
}

// Fix the map function and typing issues
export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );

  const data: SearchResponse = await res.json();

  // Use correct syntax and type annotations
  return data.objects.map(
    ({ package: { name, description, version, keywords } }) => {
      return {
        name: name,
        description: description,
        version: version,
        keywords: keywords,
      };
    }
  );
}
