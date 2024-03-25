import React from "react";

export default function Spotlight({ imageSource, artist }) {
  function getRandomArtPiece(pieces) {
    if (!pieces || pieces.length === 0) {
      return null;
    }
    return pieces[Math.floor(Math.random() * pieces.length)];
  }

  return (
    <div className="spotlight">
      <h2>Spotlight Piece</h2>
      <img src={imageSource} alt="Spotlight Art Piece" />
      <p>By {artist}</p>
    </div>
  );
}
