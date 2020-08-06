const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path");

// Para adicionar um campo slug para cada post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Verifica se o arquivo é markdown com node.internal.type
  if (node.internal.type === "MarkdownRemark") {
    // Use createFilePath para criar o base path
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    });

    // Cria o campo dentro de cada nó/post
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    });
  }
};

//para criar qualquer página através da api node do Gatsby usamos o método abaixo
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            background
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          timeToRead
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMarkdownRemark.edges;

    posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        /*para cada post ele criará uma página*/
        component: path.resolve("./src/templates/blog-post.js"),
        context: {
          slug: node.fields.slug,
        },
      });
    });

    //limit
    const postsPerPage = 6;
    const numPages = Math.ceil(posts.length / postsPerPage);

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve("./src/templates/blog-list.js"),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1,
        },
      });
    });
  });
};
