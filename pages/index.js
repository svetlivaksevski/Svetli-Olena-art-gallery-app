import React from "react";
import useSWR from "swr/immutable";
import ArtPieces from "../components/ArtPieces/index.js";

const fetcher = async (key) => {
  const response = await fetch(key);
  return await response.json();
};
export default function IndexPage() {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <div>Loading art pieces...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return <ArtPieces pieces={data} />;
}
