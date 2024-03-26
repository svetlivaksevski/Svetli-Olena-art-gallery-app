import React from "react";
import Spotlight from "../components/Spotlight/index.js";

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <>
      <h1>Art Gallery - Spotlight</h1>

      {spotlightPiece && (
        <Spotlight
          artPiecesInfo={artPiecesInfo}
          randomPieceInfo={spotlightPiece}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
