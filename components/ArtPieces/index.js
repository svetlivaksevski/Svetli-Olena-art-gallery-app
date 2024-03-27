import React from "react";
import ArtPiecePreview from "../ArtPiecesPreview/index.js";
import styled from "styled-components";
import { Satisfy } from "next/font/google";

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
  font-size: 50px;
  padding: 20px;
  color: rgb(59, 64, 66);
  }
`;

const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  return (
    <>

      <Heading className={satisfy.className}>Art Pieces</Heading>
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
