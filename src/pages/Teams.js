import React from 'react'
import Link from 'gatsby-link'

const Teams = () => (
  <div className="teamsPage">
    <ul>
      <Link to="/Teams/SGZA/">
        <h3>
          <li>KAIJUWU SGZA</li>
        </h3>
      </Link>
      <Link to="/Teams/MUTO/">
        <h3>
          <li>KAIJUWU MUTO</li>
        </h3>
      </Link>
      <Link to="/Teams/MKG/">
        <h3>
          <li>KAIJUWU MKG</li>
        </h3>
      </Link>
    </ul>
  </div>
)

export default Teams
