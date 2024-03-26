import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <span
        type="button"
        className="favorite-button"
        onClick={onToggleFavorite}
      >
        {isFavorite ? "👎" : "👍"}
      </span>
    </div>
  );
}
