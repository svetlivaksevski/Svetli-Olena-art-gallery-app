import React from "react";

export default function ArtPiecePreview({ name, artist, imageSource }) {
  console.log("result", name);
  return (
    <div>
      <img src={imageSource} alt={name} />
      <h3>{name}</h3>
      <p>By: {artist}</p>
    </div>
  );
}
