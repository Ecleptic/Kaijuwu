/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const teamTemplate = path.resolve(`src/components/teamDetails.js`)

    graphql(graphql`
      {
        # gcms {
        query
        allGetTeam {
          allGetTeam {
            edges {
              node {
                id
                teamName
                teamRank
                teamTitles
                teamIcon {
                  url
                }
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
              }
            }
          }
        }
      }
      # getTeams: teams {
      #   id
      #   teamName
      #   teamRank
      #   teamTitles
      #   players {
      #     id
      #     playerName
      #     playerNumber
      #     playerHeroes
      #     playerPosition
      #     playerTwitch
      #     playerTwitter
      #     playerYoutube
      #   }
      #   teamIcon {
      #     url
      #   }
      # }
      # getAppInfo: appInfoes {
      #   id
      #   # headerImage {
      #   #   url
      #   # }
      #   ...headerImg
      #   aboutKaijuwu
      # }
      # # getTeam:team(where: {teamName:"Muto"}) {
      # #   id
      # # teamName
      # # teamRank
      # # teamIcon{
      # # url
      # # }
      # # teamTitles
      # # players {
      # # id
      # # playerName
      # # playerNumber
      # # playerHeroes
      # # playerPosition
      # # }
      # # }
      # # getPlayersByTeam:player(where )
      # # }
      # fragment
      # headerImg
      # on
      # AppInfo {
      #   headerImage {
      #     url
      #   }
      # }
      # }
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
      }
      result.data.allGetTeam.edges.map(({ node }) => {
        createPage({
          path: `/Teams/${node.teamName}`,
          component: slash(teamTemplate),
          context: {
            teamName: node.teamName,
            teamIcon: node.teamIcon.url,
            teamRank: node.teamRank,
            teamTitles: node.teamTitles,
            players: node.players
          }
        })
      })
      resolve()
    })
  })
}

// const path = require("path")
// const slash = require("slash")

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     const postTemplate = path.resolve(`src/templates/post.js`)

//     graphql(`
//       {
//         gcms {
//           allPosts: postsConnection {
//             edges {
//               node {
//                 id
//                 title
//                 slug
//                 coverImage {
//                   handle
//                 }
//                 content
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       if (result.errors) {
//         console.log(result.errors)
//       }
//       result.data.gcms.allPosts.edges.map(({ node }) => {
//         createPage({
//           path: `/post/${node.slug}`,
//           component: slash(postTemplate),
//           context: {
//             slug: node.slug
//           }
//         })
//       })
//       resolve()
//     })
//   })
// }
