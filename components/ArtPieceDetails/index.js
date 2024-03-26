import Comments from "../Comments";
import CommentForm from "../CommentForm";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const DivColorPalette = styled.div`
  display: flex;
  align-items: center;
`;

const ColorCircle = styled.div`
  background-color: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px;
`;

const ImageDetails = styled.img`
  width: 400px;
  height: auto;
`;

const ArtPieceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.div`
  width: 30%;
  font-size: 20px;
`;

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  colors,
  slug,
  artPiecesInfo,
  onSubmitComment,
  setComments,
  comments,
  pieces,
  onToggleFavorite,
}) {
  return (
    <ArtPieceContainer>
      <ImageDetails src={image} alt={name} />
      <FavoriteButton
        onToggleFavorite={() => {
          return onToggleFavorite(pieces.slug);
        }}
        slug={pieces.slug}
        isFavorite={
          artPiecesInfo?.find((piece) => piece.slug === pieces.slug)
            ?.isFavorite || false
        }
      />
      <h2>{name}</h2>
      <p>By {artist}</p>
      <p>Year: {year}</p>
      <p>Genre: {genre}</p>
      <DivColorPalette>
        {colors.map((color) => (
          <ColorCircle key={color} color={color}></ColorCircle>
        ))}
      </DivColorPalette>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={onSubmitComment}
        setComments={setComments}
        slug={slug}
      />
      <Button onClick={() => window.history.back()}>Back</Button>
    </ArtPieceContainer>
  );
}
