require("dotenv").config();
const queries = require("./src/utils/algolia_queries");

module.exports = {
  siteMetadata: {
    title: `Curso Gatsby`,
    position: "Frontend Developer",
    description: `A blog about frontend development.`,
    author: `@devrodrigues`,
    //siteUrl pois na imagem precisaremos da url - isso é para o SEO
    siteUrl: `https://devrodrigues.com.br`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    // abaixo precisa ser a primeira config para funcionar com gatsby-remark-images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              //o mesmo nome da primeira config
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              //não quero que tenha um link externo para cada imagem
              linkImagesToOriginal: false,
            },
          },
          //esse aqui não precisa de nenhuma configuração
          //veja na doc que o lazy load precisa do 'lazysizes' e colocar esse em gatsby-browser
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        //os dados .env abaixo só conseguirão ser lidos por causa do dotenv
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY, //processo de inserir dados, devendo então ser o admin
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000 - quantidade de dados por vez,
        enablePartialUpdates: true, // default: false - importante para habilitar update parcial!
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog Front-end`,
        short_name: `Blog devrodrigues`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site. - gera os favicons
      },
    },
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
