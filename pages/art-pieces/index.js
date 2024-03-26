import React from "react";
import ArtPieces from "../../components/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  isFavorite,
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
