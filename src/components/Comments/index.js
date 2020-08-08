import React from "react";
import PropTypes from "prop-types";
//necessário segundo a doc do react-disqus-comments
import ReactDisqusComments from "react-disqus-comments";

import * as S from "./styled";

const Comments = ({ url, title }) => {
  const completeURL = `https://willianjusten.com.br${url}`;

  //é interessante usar o 'identifier' abaixo como a url do post, pois é única

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="willianjusten"
        identifier={completeURL}
        title={title}
        url={completeURL}
      />
    </S.CommentsWrapper>
  );
};

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Comments;
