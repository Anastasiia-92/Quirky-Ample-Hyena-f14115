import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './jay-jay-banner.css'

const JayJayBanner = (props) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <a
      href="https://jayjay.co/cara-terbaik-memulai-karir-sukses-di-bidang-it-dari-awal?utm_source=jooble&amp;utm_medium=website&amp;utm_campaign=webinar_qa"
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="jay-jay-banner-container container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="jay-jay-banner-image1024 banner_1024"
        />
        <img
          alt={props.image_alt1}
          src={props.image_src1}
          className="jay-jay-banner-image768 banner_768"
        />
        <img
          alt={props.image_alt2}
          src={props.image_src2}
          className="jay-jay-banner-image320 banner_320"
        />
      </div>
    </a>
  )
}

JayJayBanner.defaultProps = {
  image_src1: '/playground_assets/jay_jay_banner_768.png',
  image_src2: '/playground_assets/jay_jay_banner_320.png',
  image_src: '/playground_assets/jay_jay_banner_1024.png',
  image_alt2: 'image',
  text1: 'Link',
  image_alt: 'image',
  text: 'Link',
  link_text1: 'https://example.com',
  image_alt1: 'image',
  link_text: 'https://example.com',
}

JayJayBanner.propTypes = {
  image_src1: PropTypes.string,
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  image_alt2: PropTypes.string,
  text1: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  link_text1: PropTypes.string,
  image_alt1: PropTypes.string,
  link_text: PropTypes.string,
}

export default JayJayBanner
