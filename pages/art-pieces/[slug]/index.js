import ArtPieceDetails from "@/components/ArtPieceDetails";
import { useRouter } from "next/router";

export default function ArtPieceDetailsPage({
  pieces,
  onSubmitComment,
  comments,
  onToggleFavorite,
  artPiecesInfo,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const newArtPiece = pieces.find((piece) => piece.slug === slug);

  return (
    <ArtPieceDetails
      image={newArtPiece.imageSource}
      name={newArtPiece.name}
      artist={newArtPiece.artist}
      year={newArtPiece.year}
      genre={newArtPiece.genre}
      colors={newArtPiece.colors}
      onSubmitComment={onSubmitComment}
      slug={newArtPiece.slug}
      comments={comments}
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
