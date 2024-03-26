import Comments from "../Comments";
import CommentForm from "../CommentForm";
import FavoriteButton from "../FavoriteButton/FavoriteButton.js";

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
    <div className="art-piece-details">
      <img src={image} alt={name} />
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
      <div className="color-palette">
        {colors.map((color) => {
          return (
            <p key={color} style={{ backgroundColor: color }}>
              -
            </p>
          );
        })}
      </div>
      <Comments comments={comments} />
      <CommentForm
        onSubmitComment={onSubmitComment}
        setComments={setComments}
        slug={slug}
      />
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
