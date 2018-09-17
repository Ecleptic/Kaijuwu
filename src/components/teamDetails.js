import React from 'react'
import Link from 'gatsby-link'
import getHeroImage from '../helpers/getHeroImage'

import twitchIcon from '../layouts/assets/icons/twitch.svg'
import twitterIcon from '../layouts/assets/icons/twitter.svg'
import youtubeIcon from '../layouts/assets/icons/youtube.svg'

const TeamDetails = ({ pathContext }) => {
  const { players, teamIcon, teamName, teamRank, teamTitles } = pathContext

  return (
    <div className="teamList">
      <img className="logoImg" src={teamIcon} alt={`${teamName} Team Icon`} />
      <div className="teamInfo">
        <h1>KAIJUWU {teamName}</h1>
        <p>{teamRank}k Team</p>
        {/* <p>
          <a target="_blank" href="http://owuls2na.challonge.com/s2d3">
            OWUL Season 2 Div 3 Winners
          </a>
        </p>
        <p>
          <a target="_blank" href="http://challonge.com/core_ow">
            3rd Place CORE OW League Season 0
          </a>
        </p>
        <p>Participated in Haste Overwatch PC Tournament Series</p>
        <p>Participated in Overwatch Contenders Season Zero</p> */}
      </div>
      <ul>
        {players.map((player, index) => {
          // console.log(player)
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
                            className={hero + 'heroImage'}
                            alt={hero + ' Hero Image'}
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
      <a target="_blank" href="#" className="toTopButton">
        <p>Back To Top</p>
      </a>
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
