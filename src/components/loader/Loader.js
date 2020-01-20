import React from 'react'
import PropTypes from 'prop-types'
import './loader.css'

const Loader = ({color, size}) => (
  <div
    className='loader'
    style={{
      color: color,
      height: size,
      width: size
    }}
  />
)

Loader.defaultProps = {
  color: 'black',
  size: 25
}

Loader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default Loader
