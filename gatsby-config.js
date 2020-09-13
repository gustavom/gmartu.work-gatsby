/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require("./config/metadata")
module.exports = {
  /* Your site config here */
  siteMetadata,
  plugins: [`gatsby-plugin-react-helmet`],
}
