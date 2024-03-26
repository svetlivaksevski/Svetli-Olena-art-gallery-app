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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 20px;
  flex: 1;
`;

const Details = styled.div`
  flex: 1;
  flex-direction: column;
`;

const Span = styled.div`
  width: 60px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #008080;
  color: #ffffff;
  padding: 15px;
  border-radius: 10px;
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
    <Container>
      <Image src={image} alt={name} />
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
      <Details>
        <p>Name: {name}</p>
        <p>By {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <DivColorPalette>
          {colors.map((color) => (
            <ColorCircle key={color} color={color}></ColorCircle>
          ))}
        </DivColorPalette>
      </Details>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={onSubmitComment}
        setComments={setComments}
        slug={slug}
      />
      <Span onClick={() => window.history.back()}>Back</Span>
    </Container>
  );
}
