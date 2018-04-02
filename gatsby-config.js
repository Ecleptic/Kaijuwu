module.exports = {
  siteMetadata: {
    title: `KAIJUWU Heavy Industries`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100i,400,900`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
      ]
      }
    }
  ],

  pathPrefix: `/Kaijuwu`
}
