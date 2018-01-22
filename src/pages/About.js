import React from "react"
import Link from "gatsby-link"

const AboutPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignContent: "center",
      // alignItems: "center",
      padding: "1rem"
    }}
  >
    <h1
      style={{
        margin: "auto",
        color: "white",
        padding: "1rem"
      }}
    >
      About
    </h1>
    <br />
    <p>Havin' fun and gettin' gud. </p>
    <p>
      Or something like that. KAIJUWU HEAVY INDUSTRIES is a group of invite-only
      casual/competitive teams (mainly playing Overwatch) that put an emphasis
      on chemistry and community first. KHI aims to foster relational teams that
      value each member for more than just their skills, and provide the tools
      and assistance to help each team improve. We value positivity,
      responsibility, and respectfulness.
    </p>
  </div>
)

export default AboutPage
