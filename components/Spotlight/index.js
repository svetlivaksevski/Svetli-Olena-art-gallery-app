import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";
import { Satisfy } from "next/font/google";

const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 24px;
  padding: 20px;
  color: rgb(59, 64, 66);
`;

const Image = styled.img`
  width: 250px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 0 10px #e6e5e5;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const Imagescontainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Container = styled.div`
  font-family: "Albert Sans", sans-serif;
  background-color: #ffffff;
  border-radius: 20px;
  max-width: 300px;
  margin: 20px auto;
  margin-bottom: 150px;
  padding: 30px;
`;

const Favorite = styled.div`
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 10px;
  border: solid #ccc;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });

export default function Spotlight({
  randomPieceInfo,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <Container>
      <Heading className={satisfy.className}>Spotlight Piece</Heading>
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
      <a href={`art-pieces/${randomPieceInfo.slug}`}>
        <Imagescontainer>
          {" "}
          <Image src={randomPieceInfo.imageSource} alt={randomPieceInfo.name} />
        </Imagescontainer>{" "}
      </a>
      <Favorite>
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
      </Favorite>
      <div class="dots"></div>
      <p>By: {randomPieceInfo.artist}</p>
    </Container>
  );
}
