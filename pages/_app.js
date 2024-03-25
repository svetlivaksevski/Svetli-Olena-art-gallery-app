import Layout from "@/components/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";
import "./style.css";

const fetcher = async (key) => {
  const response = await fetch(key);
  const data = await response.json();
  return data;
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  //Handle Toggle favorite
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  function handleToggle(slug) {
    if (artPiecesInfo.find((piece) => piece.slug === slug)) {
      setArtPiecesInfo(
        artPiecesInfo.map((artpieceinfo) =>
          artpieceinfo.slug === slug
            ? { ...artpieceinfo, isFavorite: !artpieceinfo.isFavorite }
            : artpieceinfo
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  // Handle comments
  function handleCommentSubmit(comment, slug) {
    const pieceIndex = artPiecesInfo.findIndex((piece) => piece.slug === slug);

    setArtPiecesInfo((prevArtPiecesInfo) => {
      return [...prevArtPiecesInfo].map((artpieceinfo, index) =>
        index === pieceIndex
          ? {
              ...artpieceinfo,
              comments: [...(artpieceinfo.comments || []), comment],
            }
          : artpieceinfo
      );
    });
  }
  console.log(data);
  if (isLoading) return <div>Loading art pieces...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <Layout>
        <Component
          {...pageProps}
          pieces={data}
          onToggle={artPiecesInfo}
          artPiecesInfo={artPiecesInfo}
          isFavorite={artPiecesInfo.isFavorite}
          onToggleFavorite={handleToggle}
          onSubmitComment={handleCommentSubmit}
        />
      </Layout>
    </>
  );
}
