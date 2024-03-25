import React from "react";

export default function ArtPieceDetails({ image, name, artist, year, genre }) {
  return (
    <div className="art-piece-details">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>By {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
