import Link from "next/link";
import styles from "@/styles";
import styled from "styled-components";

const Ul1 = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function Navigation() {
  return (
    <Ul1>
      <li>
        <Link href="/">Spotlight</Link>
      </li>
      <li>
        <Link href="/art-pieces">ArtPieces</Link>
      </li>
      <li>
        <Link href="/favorites">Favorites</Link>
      </li>
    </Ul1>
  );
}
