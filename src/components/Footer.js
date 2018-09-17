import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => (
  <div className="footer">
    <p>
      Designed by{' '}
      <a
        style={{ color: '#ffffff', textDecoration: 'none' }}
        href="http://seannorton.me/"
        target="_blank"
      >
        Tengu
      </a>
      , Created by{' '}
      <a
        style={{ color: '#ffffff', textDecoration: 'none' }}
        href="https://camerongreens.com"
        target="_blank"
      >
        Ecleptic
      </a>
    </p>
  </div>
)

Footer.propTypes = {}

export default Footer
