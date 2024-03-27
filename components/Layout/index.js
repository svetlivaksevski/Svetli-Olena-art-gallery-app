import Link from "next/link";
import Navigation from "../Navigation";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <div
      style={{
        backgroundImage: `url("/background2.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {children}
      <Navigation />
    </div>
  );
}
