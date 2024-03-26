import React from "react";

export default function FavoriteButton({
  isFavorite,
  onToggleFavorite,
  artPiecesInfo,
  slug,
}) {
  console.log("isFavorite: " + isFavorite);
  return (
    <>
      <button
        type="button"
        className="favorite-button"
        onClick={onToggleFavorite}
      >
        {isFavorite ? "👎" : "👍"}
      </button>
    </>
  );
}
