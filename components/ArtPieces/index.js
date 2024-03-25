import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/index.js";

export default function ArtPieces({ pieces }) {
  return (
    <div className="art-pieces">
      <h2>Art Pieces</h2>
      {pieces.map((piece) => (
        <ArtPiecePreview key={piece.slug} {...piece} />
      ))}
    </div>
  );
}
