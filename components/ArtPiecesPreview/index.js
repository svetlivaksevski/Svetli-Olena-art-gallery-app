import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const ImagePreview = styled.img`
  border-radius: 20px;
  width: 70%;
  height: auto;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;
const DivGalleryContainer = styled.div`
  height: 900 px;
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
    <DivGalleryContainer>
      <FavoriteButton
        onToggleFavorite={() => {
          return onToggleFavorite(slug, isFavorite);
        }}
        isFavorite={isFavorite}
      />
      <ImagePreview src={imageSource} alt={name} />

      <h3>{name}</h3>
      <p>By: {artist}</p>
      <div>
        <a href={`art-pieces/${slug}`}>More information</a>
      </div>
    </DivGalleryContainer>
  );
}
