import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/seo";
import RecommendedPosts from "../components/RecommendedPosts";
import Comments from "../components/Comments";

import * as S from "../components/Post/styled";

//quando fazemos a query da forma abaixo, nosso componente recebe parâmetros via {data}
const BlogPost = ({ data, pageContext }) => {
  //para pegarmos todos os dados que precisamos do post
  const post = data.markdownRemark;

  //os dados previous e next vêm através do props
  //-> veja como os dados são passados em gatsby-node.js se tiver dúvida
  const previous = pageContext.previousPost;
  const next = pageContext.nextPost;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <S.PostHeader>
        <S.PostDate>
          {post.frontmatter.date} - {post.timeToRead} min de leitura
        </S.PostDate>
        <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
        <S.PostDescription>{post.frontmatter.decription}</S.PostDescription>
      </S.PostHeader>
      <S.MainContent>
        <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
      </S.MainContent>
      <RecommendedPosts previous={previous} next={next} />
      <Comments url={post.fields.slug} title={post.frontmatter.title} />
    </Layout>
  );
};

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html
      timeToRead
    }
  }
`;

export default BlogPost;
