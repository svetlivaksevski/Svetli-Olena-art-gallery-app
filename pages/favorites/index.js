import ArtPiecePreview from "../../components/ArtPiecesPreview/";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
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
      <h1>My favorite art pieces</h1>
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
