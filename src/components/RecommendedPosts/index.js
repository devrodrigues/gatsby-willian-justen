import React from "react";
import propTypes from "prop-types";
import * as S from "./styled";

const RecommendedPosts = ({ previous, next }) => (
  <S.RecommendedWrapper>
    {previous && (
      <S.RecommendedLink to={previous.fields.slug} className="previous">
        {previous.frontmatter.title}
      </S.RecommendedLink>
    )}
    {next && (
      <S.RecommendedLink to={next.fields.slug} className="next">
        {next.frontmatter.title}
      </S.RecommendedLink>
    )}
  </S.RecommendedWrapper>
);

/*Isso aqui abaixo é muito importante pois se um título não for passado ou se for passado algo
diferente de string, um Warning aparecerá*/

RecommendedPosts.propTypes = {
  //'shape' pois é um objeto com informações dentro dele
  //note que o next não é obrigatório, mas se eu tiver ele, seu title será obrigatório
  next: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({
      title: propTypes.string.isRequired,
    }),
    fields: propTypes.shape({
      slug: propTypes.string.isRequired,
    }),
  }),
};

export default RecommendedPosts;
