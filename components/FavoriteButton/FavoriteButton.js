import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
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
