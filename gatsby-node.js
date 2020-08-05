const { createFilePath } = require(`gatsby-source-filesystem`);

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
