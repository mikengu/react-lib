import React from 'react'
import PropTypes from 'prop-types'
import Loader from '../loader'

const btnContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const btnStyles = {
  borderRadius: 5,
  color: 'black',
  cursor: 'pointer',
  height: 50,
  minHeight: 50,
  minWidth: 50,
  outline: 'none',
  textAlign: 'center',
  margin: 'auto',
  textShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
  width: 100
}

export default function Button ({...props}) {
  return (
    <button
      className={props.className}
      name={props.name}
      style={
        {...btnStyles, ...props.styles}
      }
      {...props}
    >
      <div style={{...btnContainer, ...props.containerStyles}}>
        {props.isLoading ? <Loader color={props.loaderColor} /> : props.children}
      </div>
    </button>
  )
}

Button.propTypes = {
  /** button content */
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** by default, children are centered */
  containerStyles: PropTypes.object,
  /** loading indicator will be shown when added */
  isLoading: PropTypes.bool,
  loaderColor: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  styles: PropTypes.object
}
