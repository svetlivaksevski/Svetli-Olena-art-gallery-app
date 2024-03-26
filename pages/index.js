import React from "react";
import Spotlight from "../components/Spotlight/index.js";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 30px;
  padding: 20px;
`;

export default function SpotlightPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const spotlightPiece =
    pieces[Math.floor(Math.random() * (pieces.length - 1))];

  return (
    <>
      <Heading>Art Gallery - Spotlight</Heading>

      {spotlightPiece && (
        <Spotlight
          artPiecesInfo={artPiecesInfo}
          randomPieceInfo={spotlightPiece}
          onToggleFavorite={onToggleFavorite}
        />
      )}
    </>
  );
}
