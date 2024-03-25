import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function Spotlight({ randomPieceInfo, onToggleFavorite }) {
  return (
    <div className="spotlight">
      <FavoriteButton
        onToggleFavorite={() => onToggleFavorite(randomPieceInfo.slug)}
      />
      <h2>Spotlight Piece</h2>
      <img src={randomPieceInfo.imageSource} alt={randomPieceInfo.name} />
      <p>By {randomPieceInfo.artist}</p>
    </div>
  );
}
