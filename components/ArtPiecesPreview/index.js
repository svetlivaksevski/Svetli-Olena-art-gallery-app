import React from "react";

export default function ArtPiecePreview({ imageSource, name, artist }) {
  return (
    <div className="art-piece-preview">
      <img
        src={imageSource}
        alt={name}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
      />
      <h3>{name}</h3>
      <p>By {artist}</p>
    </div>
  );
}
