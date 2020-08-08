import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";

//quando fazemos a query da forma abaixo, nosso componente recebe parâmetros via {data}
const BlogPost = ({ data }) => {
  //para pegarmos todos os dados que precisamos do post
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default BlogPost;
