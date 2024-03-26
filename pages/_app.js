import Layout from "@/components/Layout";
import useSWR from "swr";
import useLocalStorageState from "use-local-storage-state";

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

  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  const [comments, setComments] = useLocalStorageState("comments", {
    defaultValue: [],
  });
  //Handle Toggle favorite

  function handleToggle(slug) {
    const info = artPiecesInfo.find((piece) => piece.slug === slug);

    if (info) {
      setArtPiecesInfo(
        artPiecesInfo.map((piece) =>
          piece.slug === slug
            ? { ...piece, isFavorite: !piece.isFavorite }
            : piece
        )
      );
    } else {
      setArtPiecesInfo([...artPiecesInfo, { slug, isFavorite: true }]);
    }
  }

  // Handle comments

  function handleAddComment(newComment, slug) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setComments([{ id: slug, date, ...newComment }, ...comments]);
  }

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
          isFavorite={artPiecesInfo}
          onToggleFavorite={handleToggle}
          onSubmitComment={handleAddComment}
          comments={comments}
        />
      </Layout>
    </>
  );
}
