import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Quirky Ample Hyena</title>
        <meta property="og:title" content="Quirky Ample Hyena" />
      </Helmet>
      <div data-thq="thq-dropdown" className="home-thq-dropdown list-item">
        <div data-thq="thq-dropdown-toggle" className="home-dropdown-toggle">
          <span className="home-text">Menu Item</span>
          <div data-thq="thq-dropdown-arrow" className="home-dropdown-arrow">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M426 726v-428l214 214z"></path>
            </svg>
          </div>
        </div>
        <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
          <li data-thq="thq-dropdown" className="home-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle1"
            >
              <span className="home-text1">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle2"
            >
              <span className="home-text2">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="home-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="home-dropdown-toggle3"
            >
              <span className="home-text3">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-container1"></div>
    </div>
  )
}

export default Home
