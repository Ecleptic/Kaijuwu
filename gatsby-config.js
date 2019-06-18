module.exports = {
  siteMetadata: {
    title: `KAIJUWU Heavy Industries`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        url: `https://api-uswest.graphcms.com/v1/cjlt0oaf008og01gm51zwqk85/master`,
        typeName: "GCMS",
        fieldName: "gcms",
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMGY4OWEyODMtNzgyYS00NzI0LWFkNTMtOWFjZDk4NDUyY2Q2In0.pz6DA0RYueZ30bzG2cTw8Lx2KHWVbfxouS0nbk1SCgI`,
        query: `
        {
        getTeams: teams {
          id
          teamName
          teamRank
          teamTitles
          players {
            id
            playerName
            playerNumber
            playerHeroes
            playerPosition
            playerTwitch
            playerTwitter
            playerYoutube
          }
          teamIcon {
            url
          }
        }
        getAppInfo: appInfoes {
          id
          # headerImage {
          #   url
          # }
          ...headerImg
          aboutKaijuwu
        }
        # getTeam:team(where: {teamName:"Muto"}) {
                #   id
                # teamName
                # teamRank
                # teamIcon{
                # url
                # }
                # teamTitles
                # players {
                # id
                # playerName
                # playerNumber
                # playerHeroes
                # playerPosition
                # }
                # }
                # getPlayersByTeam:player(where )
      }
      fragment headerImg on AppInfo{
        headerImage{
          url
        }
      }
`
      }
    }
  ]
}
