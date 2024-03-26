import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function Spotlight({
  randomPieceInfo,
  onToggleFavorite,
  artPiecesInfo,
  pieces,
  isFavorite,
}) {
  return (
    <div className="spotlight">
      <FavoriteButton
        onToggleFavorite={() => {
          return onToggleFavorite(randomPieceInfo.slug);
        }}
        slug={randomPieceInfo.slug}
        isFavorite={
          artPiecesInfo?.find((piece) => piece.slug === randomPieceInfo.slug)
            ?.isFavorite || false
        }
      />
      <h2>Spotlight Piece</h2>
      <img src={randomPieceInfo.imageSource} alt={randomPieceInfo.name} />
      <p>By {randomPieceInfo.artist}</p>
    </div>
  );
}
