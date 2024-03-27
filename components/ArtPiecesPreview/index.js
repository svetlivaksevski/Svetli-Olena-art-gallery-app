import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const Image = styled.img`
  border-radius: 20px;
  width: 70%;
  height: auto;
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
  width: 250px;
  padding: 30px;
`;

const Button = styled.div`
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Favorite = styled.div`
  padding: 10px;
  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  border: solid #ccc;
`;

export default function ArtPiecePreview({
  name,
  artist,
  imageSource,
  slug,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <Container>
      <a href={`art-pieces/${slug}`}>
        <Imagescontainer>
          <Image src={imageSource} alt={name} />
        </Imagescontainer>
      </a>
      <Favorite>
        <FavoriteButton
          onToggleFavorite={() => {
            return onToggleFavorite(slug, isFavorite);
          }}
          isFavorite={isFavorite}
        />
      </Favorite>
      <div class="dots"></div>
      <h3>{name}</h3>
      <p>By: {artist}</p>
      <div class="dots"></div>
      <Button>
        <a href={`art-pieces/${slug}`}>More information</a>
      </Button>
    </Container>
  );
}
