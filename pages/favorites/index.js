import ArtPiecePreview from "../../components/ArtPiecesPreview/";

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
    <div>
      <h1>My favorite art pieces</h1>
      <ul>
        {favoritePieces.length > 0 ? (
          favoritePieces.map((piece) => (
            <li key={piece.slug}>
              <ArtPiecePreview
                name={piece.name}
                artist={piece.artist}
                imageSource={piece.imageSource}
                slug={piece.slug}
                onToggleFavorite={onToggleFavorite}
                isFavorite={piece.isFavorite}
              />
            </li>
          ))
        ) : (
          <p>You haven't selected any art pieces as favorites yet.</p>
        )}
      </ul>
    </div>
  );
}
