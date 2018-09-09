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
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-uswest.graphcms.com/v1/cjlt0oaf008og01gm51zwqk85/master`,
        query: require("./gatsby/configQuery")
      }
    },
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
};
