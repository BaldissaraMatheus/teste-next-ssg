import Header from "../components/Header";
import fs from "fs";

const Home = ({ slugs }) => (
  <div>
    <Header slugs={slugs} />
    <main style={{ paddingLeft: 15 }}>
      <h1>Home page</h1>
    </main>
  </div>
);

export const getStaticProps = async () => {
  const files = fs.readdirSync("posts");
  return {
    props: {
      slugs: files.map(filename => filename.replace(".md", ""))
    }
  };
};

export default Home;
