import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 24px;
  padding: 20px;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  margin-top: 20px;
`;
export default function Spotlight({
  randomPieceInfo,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <Container>
      <Heading>Spotlight Piece</Heading>
      <FavoriteButton
        onToggleFavorite={() => {
          return onToggleFavorite(randomPieceInfo.slug);
        }}
        slug={randomPieceInfo.slug}
        isFavorite={
          artPiecesInfo?.find((piece) => piece.slug === randomPieceInfo.slug)
            ?.isFavorite || false
        }
      />
      <Image src={randomPieceInfo.imageSource} alt={randomPieceInfo.name} />
      <p>By {randomPieceInfo.artist}</p>
    </Container>
  );
}
