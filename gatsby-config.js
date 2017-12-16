module.exports = {
  siteMetadata: {
    title: `KAIJUWU Heavy Industries`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-json`
  ],

  pathPrefix: `/Kaijuwu`
}