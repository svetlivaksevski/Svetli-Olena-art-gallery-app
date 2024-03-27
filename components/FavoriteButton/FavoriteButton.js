import React from "react";

export default function FavoriteButton({ isFavorite, onToggleFavorite }) {
  return (
    <div>
      <span
        type="button"
        className="favorite-button"
        onClick={onToggleFavorite}
      >
        {isFavorite ? "🤍 Remove from favorites" : "❤️ Add in favorites"}
      </span>
    </div>
  );
}
