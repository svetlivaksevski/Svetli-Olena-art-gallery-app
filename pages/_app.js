import GlobalStyle from "../styles";
// import useSWR from "swr";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
