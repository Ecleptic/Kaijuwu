module.exports = {
  siteMetadata: {
    title: `KAIJUWU Heavy Industries`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-uswest.graphcms.com/v1/cjlt0oaf008og01gm51zwqk85/master`,
        token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiMGY4OWEyODMtNzgyYS00NzI0LWFkNTMtOWFjZDk4NDUyY2Q2In0.pz6DA0RYueZ30bzG2cTw8Lx2KHWVbfxouS0nbk1SCgI`,
        query: `
        {
        getTeams: teams {
          id
          teamName
          teamRank
          players {
            id
            playerName
            playerNumber
            playerHeroes
            playerPosition
            playerTwitch
            playerTwitch
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
`,
      },
    },
    `gatsby-plugin-sass`,
  ],
}
