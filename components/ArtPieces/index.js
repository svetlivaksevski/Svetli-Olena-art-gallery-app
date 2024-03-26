import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/index.js";
import styled from "styled-components";

const DivArtPieces = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 30px;
  padding: 20px;
`;

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>
      <Heading>Art Pieces</Heading>
      <DivArtPieces>
        {pieces.map((piece) => (
          <ArtPiecePreview
            key={piece.slug}
            {...piece}
            onToggleFavorite={onToggleFavorite}
            isFavorite={
              artPiecesInfo.find((info) => info.slug === piece.slug)
                ?.isFavorite || false
            }
          />
        ))}
      </DivArtPieces>
    </>
  );
}
