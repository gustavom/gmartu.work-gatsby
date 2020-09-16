/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require("./config/metadata")
module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gustavo Martusewicz`,
        short_name: `gmartu.work`,
        description: `Creating great user experiencies - Front-End Developer`,
        lang: `pt-br`,
        start_url: `/`,
        background_color: `#222222`,
        theme_color: `#222222`,
        display: `standalone`,
        icon: `${__dirname}/static/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-77333673-2",
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#222222`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== "production",
      },
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Sans\:400,500,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
        // See pattern syntax recognized by micromatch
        // https://www.npmjs.com/package/micromatch#matching-features
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog/`,
        name: `post`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projetos/`,
        name: `projetos`,
      },
    },
    `gatsby-transformer-remark`,
    // ,
    // `gatsby-plugin-offline`,
  ],
}
