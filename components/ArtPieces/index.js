import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/index.js";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <h2>Art Pieces</h2>
      {pieces.map((piece) => (
        <ArtPiecePreview
          key={piece.slug}
          {...piece}
          onToggleFavorite={onToggleFavorite}
          isFavorite={
            artPiecesInfo.find((info) => info.slug === piece.slug)
              ?.isFavorite || false
          }
        />
      ))}
    </>
  );
}
