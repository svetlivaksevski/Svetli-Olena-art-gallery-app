import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/index.js";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 150px;
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
      <Container>
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
      </Container>
    </>
  );
}
