import Link from "next/link";
import styled from "styled-components";

const Ul1 = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  list-style-type: none;
  position: fixed;
  width: 100%;
  background-color: #f5f5f5;
  bottom: 0;
  padding: 30px;
  margin-bottom: 0;
  font-size: 18px;
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
