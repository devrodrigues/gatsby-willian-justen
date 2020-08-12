import styled from "styled-components";
import media from "styled-media-query";

export const CommentsWrapper = styled.section`
  margin: auto;
  max-width: 70rem;
  padding: 3rem 6.4rem 3rem;

  ${media.lessThan("large")`
    padding: 3rem 1.4rem 0;
    max-width: 100%;
  `}

  /*classe para esconder as propagandas que vem no Disqus*/
  iframe[src*="ads-iframe"] {
    display: none;
  }
  #disqus_thread {
    /*!important necessário pois é um 'third-party'*/
    a {
      color: var(--highlight) !important;
    }
  }
`;

export const CommentsTitle = styled.h2`
  color: var(--postColor);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.375rem;
  `}
`;
