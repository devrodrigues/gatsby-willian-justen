//objectID é necessário no Algolia para que identifique cada post
//No nosso caso temos id. Então para passar para query com outro nome basta fazer objectID:id

//excerpt pega um resumo de até 5000 caracteres

const postsQuery = `{
  posts: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }){
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          title
          background
          category
          date_timestamp: date
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
          description
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`;

//abaixo é porque preciso de alguns dados específicos
const flatten = (arr) =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    date_timestamp: parseInt(
      //pegando data a partir do timestamp e transformando de milissegundos para segundos
      //isso é para ordenar nosso post
      (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)
    ),
    ...rest,
  }));

const queries = [
  {
    query: postsQuery,
    //abaixo é o dado que preciso transformar para enviar para o algolia
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: "Posts", // overrides main index name, optional
    settings: {
      //propriedade que separa cada busca de 20 em 20 dentro do algolia
      attributesToSnippet: ["excerpt:20"],
    },
  },
];

//exportando da forma abaixo pois é do node
module.exports = queries;
