const fs = require("fs")
const { buildSchema, buildClientSchema } = require("graphql")

module.exports = {
  siteMetadata: {
    title: `KAIJUWU Heavy Industries`,
    author: "Ecleptic",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "graphCMS",
        // This is field under which it's accessible
        fieldName: "graphCMS",
        // Url to query from
        url:
          "https://api-uswest.graphcms.com/v1/cjlt0oaf008og01gm51zwqk85/master",
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiNDFjMmEwMWEtYjgzYS00YTljLWE4OWYtNmE0ZmU5ZTRhODM5In0.Z6WHQH2TtrUbV7KtFpazet-i4y1d55T10D_oroVOoVE",
        },
        refetchInterval: 60,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
