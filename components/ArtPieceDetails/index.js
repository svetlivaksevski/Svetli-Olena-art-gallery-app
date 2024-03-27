import Comments from "../Comments";
import CommentForm from "../CommentForm";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";
import styled from "styled-components";

const DivColorPalette = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
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
`;

const ContainerDetails = styled.div`
  font-family: "Albert Sans", sans-serif;
  background-color: #ffffff;
  border-radius: 20px;
  width: 550px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 100px;
  font-family: "Albert Sans", sans-serif;
`;

const Image = styled.img`
  width: 400px;
  height: auto;
  border-radius: 20px;
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

const Favorite = styled.div`
  padding: 10px;
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;

  border-radius: 10px;
  border: solid #ccc;
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
      <ContainerDetails>
        <Image src={image} alt={name} />
        <Favorite>
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
        </Favorite>
        <div class="dots"></div>
        <p>Name: {name}</p>
        <p>By {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
        <div class="dots"></div>
        <DivColorPalette>
          {colors.map((color) => (
            <ColorCircle key={color} color={color}></ColorCircle>
          ))}
        </DivColorPalette>
      </ContainerDetails>
      <div class="dots"></div>
      <ContainerComments>
        <Comments comments={comments} />

        <CommentForm
          onSubmitComment={onSubmitComment}
          setComments={setComments}
          slug={slug}
        />
        <div class="dots"></div>
        <Span onClick={() => window.history.back()}>Back</Span>
      </ContainerComments>
    </Container>
  );
}
