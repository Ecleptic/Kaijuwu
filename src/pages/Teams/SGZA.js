import React from "react"
import Link from "gatsby-link"

const SGZA = props => {
  const players = props.data.allSgzaJson.edges
  const loading = props.data.loading

  if (loading) return null
  return (
    <div className="teamList">
      <h1>KAIJUWU SGZA</h1>
      <ul>
      {players.map((player, index) => {
        return (
          <li key={index} className="playersListItem">
            <div className="position">
              <span className="positionText">{player.node.position}</span>
            </div>
            <div className="name">
              <span className="nameText">{player.node.username}</span>
              <span className="numberText">{player.node.usernumber}</span>
            </div>
            <div className="icons">
              <div className="social">
                <ul>
                  {player.node.social.twitch ? (
                    <li className="social_twitch">
                      <a href={player.node.social.twitch}>
                        <img
                          width="20"
                          height="20"
                          src={twitch}
                          alt="twitch icon"
                        />
                      </a>
                    </li>
                  ) : (
                    <li className="social_twitch" />
                  )}
                  {player.node.social.twitter ? (
                    <li className="social_twitter">
                      <a href={player.node.social.twitter}>
                        <img
                          width="20"
                          height="20"
                          src={twitter}
                          alt="twitter icon"
                        />
                      </a>
                    </li>
                  ) : (
                    <li className="social_twitter" />
                  )}
                  {player.node.social.youtube ? (
                    <li className="social_ytube">
                      <a href={player.node.social.youtube}>
                        <img
                          width="20"
                          height="20"
                          src={youtube}
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
                  {player.node.heroes.map((hero, index) => {
                    return (
                      <li key={index} className="heroItem">
                        <img
                          width="20"
                          height="20"
                          className={hero + "heroImage"}
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
    </div>
  )
}

export default SGZA

export const sgzaQuery = graphql`
  query sgzaQuery {
    allSgzaJson(limit: 5) {
      edges {
        node {
          position
          username
          usernumber
          social {
            twitch
            twitter
            youtube
          }
          heroes
        }
      }
    }
  }
`

function getHeroImage(hero) {
  switch (hero) {
    case "Ana": {
      return AnaIcon
      break
    }
    case "Bastion": {
      return Soldier_76Icon
      break
    }
    case "Dva": {
      return DvaIcon
      break
    }
    case "Genji": {
      return GenjiIcon
      break
    }
    case "Hanzo": {
      return HanzoIcon
      break
    }
    case "Junkrat": {
      return JunkratIcon
      break
    }
    case "Lucio": {
      return LucioIcon
      break
    }
    case "McCree": {
      return McCreeIcon
      break
    }
    case "Mei": {
      return MeiIcon
      break
    }
    case "Mercy": {
      return MercyIcon
      break
    }
    case "Orisa": {
      return OrisaIcon
      break
    }
    case "Pharah": {
      return PharahIcon
      break
    }
    case "Reaper": {
      return ReaperIcon
      break
    }
    case "Reinhardt": {
      return ReinhardtIcon
      break
    }
    case "Roadhog": {
      return RoadhogIcon
      break
    }
    case "Soldier_76": {
      return Soldier_76Icon
      break
    }
    case "Sombra": {
      return SombraIcon
      break
    }
    case "Symmetra": {
      return SymmetraIcon
      break
    }
    case "Torbjorn": {
      return TorbjornIcon
      break
    }
    case "Tracer": {
      return TracerIcon
      break
    }
    case "Widowmaker": {
      return WidowmakerIcon
      break
    }
    case "Winston": {
      return WinstonIcon
      break
    }
    case "Zarya": {
      return ZaryaIcon
      break
    }
    case "Zenyatta": {
      return ZenyattaIcon
      break
    }

    default:
      break
  }
}

import twitch from "../assets/icons/twitch.svg"
import twitter from "../assets/icons/twitter.svg"
import youtube from "../assets/icons/youtube.svg"

import AnaIcon from "../assets/heroes/Spray_Ana_Icon.png"
import AnaPixel from "../assets/heroes/Spray_Ana_Pixel.png"
import BastionIcon from "../assets/heroes/Spray_Bastion_Icon.png"
import BastionPixel from "../assets/heroes/Spray_Bastion_Pixel.png"
import DvaIcon from "../assets/heroes/Spray_Dva_Icon.png"
import DvaPixel from "../assets/heroes/Spray_Dva_Pixel.png"
import GenjiIcon from "../assets/heroes/Spray_Genji_Icon.png"
import GenjiPixel from "../assets/heroes/Spray_Genji_Pixel.png"
import HanzoIcon from "../assets/heroes/Spray_Hanzo_Icon.png"
import HanzoPixel from "../assets/heroes/Spray_Hanzo_Pixel.png"
import JunkratIcon from "../assets/heroes/Spray_Junkrat_Icon.png"
import JunkratPixel from "../assets/heroes/Spray_Junkrat_Pixel.png"
import LucioIcon from "../assets/heroes/Spray_Lucio_Icon.png"
import LucioPixel from "../assets/heroes/Spray_Lucio_Pixel.png"
import McCreeIcon from "../assets/heroes/Spray_McCree_Icon.png"
import McCreePixel from "../assets/heroes/Spray_McCree_Pixel.png"
import MeiIcon from "../assets/heroes/Spray_Mei_Icon.png"
import MeiPixel from "../assets/heroes/Spray_Mei_Pixel.png"
import MercyIcon from "../assets/heroes/Spray_Mercy_Icon.png"
import MercyPixel from "../assets/heroes/Spray_Mercy_Pixel.png"
import OrisaIcon from "../assets/heroes/Spray_Orisa_Icon.png"
import OrisaPixel from "../assets/heroes/Spray_Orisa_Pixel.png"
import PharahIcon from "../assets/heroes/Spray_Pharah_Icon.png"
import PharahPixel from "../assets/heroes/Spray_Pharah_Pixel.png"
import ReaperIcon from "../assets/heroes/Spray_Reaper_Icon.png"
import ReaperPixel from "../assets/heroes/Spray_Reaper_Pixel.png"
import ReinhardtIcon from "../assets/heroes/Spray_Reinhardt_Icon.png"
import ReinhardtPixel from "../assets/heroes/Spray_Reinhardt_Pixel.png"
import RoadhogIcon from "../assets/heroes/Spray_Roadhog_Icon.png"
import RoadhogPixel from "../assets/heroes/Spray_Roadhog_Pixel.png"
import Soldier_76Icon from "../assets/heroes/Spray_Soldier_76_Icon.png"
import Soldier_76Pixel from "../assets/heroes/Spray_Soldier_76_Pixel.png"
import SombraIcon from "../assets/heroes/Spray_Sombra_Icon.png"
import SombraPixel from "../assets/heroes/Spray_Sombra_Pixel.png"
import SymmetraIcon from "../assets/heroes/Spray_Symmetra_Icon.png"
import SymmetraPixel from "../assets/heroes/Spray_Symmetra_Pixel.png"
import TorbjornIcon from "../assets/heroes/Spray_Torbjorn_Icon.png"
import TorbjornPixel from "../assets/heroes/Spray_Torbjorn_Pixel.png"
import TracerIcon from "../assets/heroes/Spray_Tracer_Icon.png"
import TracerPixel from "../assets/heroes/Spray_Tracer_Pixel.png"
import WidowmakerIcon from "../assets/heroes/Spray_Widowmaker_Icon.png"
import WidowmakerPixel from "../assets/heroes/Spray_Widowmaker_Pixel.png"
import WinstonIcon from "../assets/heroes/Spray_Winston_Icon.png"
import WinstonPixel from "../assets/heroes/Spray_Winston_Pixel.png"
import ZaryaIcon from "../assets/heroes/Spray_Zarya_Icon.png"
import ZaryaPixel from "../assets/heroes/Spray_Zarya_Pixel.png"
import ZenyattaIcon from "../assets/heroes/Spray_Zenyatta_Icon.png"
import ZenyattaPixel from "../assets/heroes/Spray_Zenyatta_Pixel.png"
