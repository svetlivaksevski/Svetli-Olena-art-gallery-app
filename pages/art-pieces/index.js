import React from "react";
import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <ArtPieces
      pieces={pieces}
      onToggleFavorite={onToggleFavorite}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
