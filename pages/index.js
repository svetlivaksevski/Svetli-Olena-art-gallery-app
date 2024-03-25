import React from "react";
// import useSWR from "swr/immutable";
// import ArtPieces from "../components/ArtPieces/index.js";
import Spotlight from "../components/Spotlight/index.js";

// const fetcher = async (key) => {
//   const response = await fetch(key);
//   return await response.json();
// };
// export default function IndexPage() {
//   const { data, error, isLoading } = useSWR(
//     "https://example-apis.vercel.app/api/art",
//     fetcher
//   );
//   console.log("result", data);

//   if (isLoading) return <div>Loading art pieces...</div>;

//   if (error) return <div>Error: {error.message}</div>;

//   return <ArtPieces pieces={data} />;
// }

export default function SpotlightPage({ pieces }) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  console.log("result", spotlightPiece);

  return (
    <>
      <h1>Art Gallery - Spotlight</h1>

      {spotlightPiece && <Spotlight randomPieceInfo={spotlightPiece} />}
    </>
  );
}
