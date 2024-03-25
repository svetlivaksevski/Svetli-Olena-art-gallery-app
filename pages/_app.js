import Layout from "@/components/Layout";
import useSWR from "swr";
import { useState } from "react";
import "./style.css";

const fetcher = async (key) => {
  const response = await fetch(key);
  return await response.json();
};

export default function App({ Component, pageProps }) {
  // const [artPiecesInfo, setArtPiecesInfo] = useState([]);

  // function handleToggle(piece.slug) {
  //   const updatedPieceArray = pieces.map((piece) =>
  //     piece.slug === slug ? { ...piece, isFavorite: !piecei.iFavoriten } :piecet
  //   );
  //   setArtPiecesInfo(updatedPieceArray);
  // }

  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <div>Loading art pieces...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Layout>
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
