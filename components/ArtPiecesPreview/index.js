import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

export default function ArtPiecePreview({
  name,
  artist,
  imageSource,
  slug,
  onToggleFavorite,
  isFavorite,
}) {
  console.log("clicke me", onToggleFavorite);
  return (
    <div className="gallery-containers-style">
      <FavoriteButton
        onToggleFavorite={() => {
          return onToggleFavorite(slug, isFavorite);
        }}
        isFavorite={isFavorite}
      />
      <img src={imageSource} alt={name} />
      <h3>{name}</h3>
      <p>By: {artist}</p>
      <div>
        <a href={`art-pieces/${slug}`}>More information</a>
      </div>
    </div>
  );
}
