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
  padding: 25px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 20px;
  width: 700px;
  padding: 20px;
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
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  margin: 30px;
  cursor: pointer;
`;

const Favorite = styled.div`
  padding: 10px;
  margin: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  border: solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;
const Bold = styled.div`
  font-weight: bold;
  color: #008080;
  padding-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
const P = styled.div`
  padding: 10px;
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
      <Span onClick={() => window.history.back()}>← Go back</Span>
      <ContainerDetails>
        <DivColorPalette>
          {colors.map((color) => (
            <ColorCircle key={color} color={color}></ColorCircle>
          ))}
        </DivColorPalette>
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
        <div className="dots"></div>
        <Details>
          <P>
            <Bold>Name:</Bold>
            {name}
          </P>
          <P>
            <Bold>Artist: </Bold>
            {artist}
          </P>
          <P>
            <Bold>Year: </Bold>
            {year}
          </P>
          <P>
            <Bold>Genre:</Bold> {genre}
          </P>
        </Details>
      </ContainerDetails>
      <div className="dots"></div>
      <ContainerComments>
        <Comments comments={comments} slug={slug} />

        <CommentForm
          onSubmitComment={onSubmitComment}
          setComments={setComments}
          slug={slug}
        />
      </ContainerComments>
    </Container>
  );
}
