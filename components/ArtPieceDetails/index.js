import Comments from "../Comments";
import CommentForm from "../CommentForm";

export default function ArtPieceDetails({
  image,
  name,
  artist,
  year,
  genre,
  slug,
  artPiecesInfo,
  onSubmitComment,
  colors,
}) {
  const artPiece = artPiecesInfo?.find((piece) => piece.slug === slug);
  console.log("colors", colors);
  return (
    <div className="art-piece-details">
      <img src={image} alt={name} />
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
      <Comments comments={artPiece?.comments || []} />
      <CommentForm
        onSubmitComment={(comment) => onSubmitComment(comment, slug)}
        slug={slug}
      />
      <button onClick={() => window.history.back()}>Back</button>
    </div>
  );
}
