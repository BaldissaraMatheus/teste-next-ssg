import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Header from "../components/Header";
import { marked } from "marked";

const Post = ({ htmlString, data, slugs, files }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="description" content={data.description} />
      </Head>
      <Header slugs={slugs} />
			<main dangerouslySetInnerHTML={{ __html: htmlString }} style={{ paddingLeft: 15 }} />
    </>
  );
};

export const getStaticPaths = async () => {
  const files = fs.readdirSync("posts");
  const paths = files.map(filename => ({
    params: { slug: filename.replace(".md", ""), }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps = async ({ params: { slug, slugs } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("posts", slug + ".md"))
    .toString();
  const files = fs.readdirSync("posts");

  const parsedMarkdown = matter(markdownWithMetadata);
  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      htmlString,
      slugs: files.map(filename => filename.replace(".md", "")),
      data: parsedMarkdown.data,
    }
  };
};

export default Post;