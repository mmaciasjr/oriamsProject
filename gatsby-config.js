/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata:{
    title:'ScrubHub',
    description: "ScrubHub. The only way to wash your pet",
    author: "riomar",
    data: ["item 1", "item 2"],
    person: {name: "rio", age: 42},
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-styled-components`],
}
