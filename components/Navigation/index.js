import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      <li>
        <Link href="/components/Spotlight/index.js">Spotlight</Link>
      </li>
      <li>
        <Link href="/components/ArtPieces/index.js">ArtPieces</Link>
      </li>
      <li>
        <Link href="/components/Favorites/index.js">Favorites</Link>
      </li>
    </ul>
  );
}
