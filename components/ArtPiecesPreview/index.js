import React from "react";

export default function ArtPiecePreview({ name, artist, imageSource, slug }) {
  return (
    <div>
      <img src={imageSource} alt={name} />
      <h3>{name}</h3>
      <p>By: {artist}</p>
      <div>
        <a href={`art-pieces/${slug}`}>More information</a>
      </div>
    </div>
  );
}
