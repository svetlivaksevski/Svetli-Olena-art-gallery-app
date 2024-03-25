import React from "react";

export default function Spotlight({ randomPieceInfo }) {
  return (
    <div className="spotlight">
      <h2>Spotlight Piece</h2>
      <img src={randomPieceInfo.imageSource} alt={randomPieceInfo.name} />
      <p>By {randomPieceInfo.artist}</p>
    </div>
  );
}
