import Layout from "@/components/Layout";
import GlobalStyle from "../styles";
import useSWR from "swr";

const fetcher = async (key) => {
  const response = await fetch(key);
  return await response.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );

  if (isLoading) return <div>Loading art pieces...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} pieces={data} />
      </Layout>
    </>
  );
}
