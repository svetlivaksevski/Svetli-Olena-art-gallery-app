import ArtPiecePreview from "../../components/ArtPiecesPreview/";
import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: bold;
  font-size: 24px;
  padding: 50px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding-bottom: 150px;
`;

const List = styled.div`
  list-style-type: none;
`;

export default function FavoritesPage({
  artPiecesInfo,
  pieces,
  onToggleFavorite,
}) {
  const artPiecesInfoMap = {};
  artPiecesInfo.forEach((piece) => {
    artPiecesInfoMap[piece.slug] = piece;
  });

  const favoritePieces = pieces
    .map((piece) => {
      const artPieceInfo = artPiecesInfoMap[piece.slug];
      if (artPieceInfo && artPieceInfo.isFavorite) {
        return {
          ...piece,
          ...artPieceInfo,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <>
      <Heading>My favorite art pieces</Heading>
      <Container>
        {favoritePieces.length > 0 ? (
          favoritePieces.map((piece) => (
            <List key={piece.slug}>
              <ArtPiecePreview
                name={piece.name}
                artist={piece.artist}
                imageSource={piece.imageSource}
                slug={piece.slug}
                onToggleFavorite={onToggleFavorite}
                isFavorite={piece.isFavorite}
              />
            </List>
          ))
        ) : (
          <p>You haven't selected any art pieces as favorites yet.</p>
        )}
      </Container>
    </>
  );
}
