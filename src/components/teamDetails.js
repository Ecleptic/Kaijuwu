import React from "react"
import Link from "gatsby-link"
import Markdown from "react-markdown"

import getHeroImage from "../helpers/getHeroImage"
import twitchIcon from "../layouts/assets/icons/twitch.svg"
import twitterIcon from "../layouts/assets/icons/twitter.svg"
import youtubeIcon from "../layouts/assets/icons/youtube.svg"

const TeamDetails = ({ pathContext }) => {
  const { players, teamIcon, teamName, teamRank, teamTitles } = pathContext

  return (
    <div className="teamList">
      <img className="logoImg" src={teamIcon} alt={`${teamName} Team Icon`} />
      <div className="teamInfo">
        <h1>KAIJUWU {teamName}</h1>
        <p>{teamRank}k Team</p>
        <Markdown source={teamTitles}/>
      </div>
      <ul>
        {players.map((player, index) => {
          return (
            <li key={index} className="playersListItem">
              <div className="position">
                <span className="positionText">{player.playerPosition}</span>
              </div>
              <div className="name">
                <span className="nameText">{player.playerName}</span>
                {player.playerNumber ? (
                  <span className="numberHash">#</span>
                ) : null}
                <span className="numberText">{player.playerNumber}</span>
              </div>
              <div className="icons">
                <div className="social">
                  <ul>
                    {player.playerTwitch ? (
                      <li className="social_twitch">
                        <a target="_blank" href={player.playerTwitch}>
                          <img
                            width="23"
                            height="23"
                            src={twitchIcon}
                            alt="twitch icon"
                          />
                        </a>
                      </li>
                    ) : (
                      <li className="social_twitch" />
                    )}
                    {player.playerTwitter ? (
                      <li className="social_twitter">
                        <a target="_blank" href={player.playerTwitter}>
                          <img
                            width="23"
                            height="23"
                            src={twitterIcon}
                            alt="twitter icon"
                          />
                        </a>
                      </li>
                    ) : (
                      <li className="social_twitter" />
                    )}
                    {player.playerYoutube ? (
                      <li className="social_ytube">
                        <a target="_blank" href={player.playerYoutube}>
                          <img
                            width="23"
                            height="23"
                            src={youtubeIcon}
                            alt="youtube icon"
                          />
                        </a>
                      </li>
                    ) : (
                      <li className="social_youtube" />
                    )}
                  </ul>
                </div>
                <div className="heroes">
                  <ul>
                    {player.playerHeroes.map((hero, index) => {
                      return (
                        <li key={index} className="heroItem">
                          <img
                            width="30"
                            height="30"
                            className={hero + "heroImage"}
                            alt={hero + " Hero Image"}
                            src={getHeroImage(hero)}
                          />
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {/* <a target="_blank" href="#" className="toTopButton">
        <p>Back To Top</p>
      </a> */}
      <button
        className="toTopButton"
        onClick={() => {
          document.body.scrollTop = 0 // For Safari
          document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        }}
      >
        Back To Top
      </button>
    </div>
  )
}

export default TeamDetails

// export const query = graphql`
//   query getTeam($teamName: String!) {
//     getTeam(where: { teamName: $teamName }) {
//       id
//       teamName
//       teamRank
//       teamIcon {
//         url
//       }
//       teamTitles
//       players {
//         id
//         playerName
//         playerNumber
//         playerHeroes
//         playerPosition
//       }
//     }
//   }
// `
