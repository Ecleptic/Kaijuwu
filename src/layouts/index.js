import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Header />
    <main>{children()}</main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
export const getInfoForHeader = graphql`
  query getInfoForHeader {
    getAppInfo {
      aboutKaijuwu
      ...headerImg
    }
  }
  # fragment headerImg on getAppInfo {
  #   headerImage {
  #     url
  #   }
  # }
`
