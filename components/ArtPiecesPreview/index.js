import React from "react";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const ImagePreview = styled.img`
  width: 200px;
  height: auto;
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
  console.log("clicke me", onToggleFavorite);
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
