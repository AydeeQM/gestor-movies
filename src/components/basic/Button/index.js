import React from 'react'
import PropTypes from 'prop-types'
import { ButtonStyled } from './Button.style'

function Button ({ children, minimize, ...props }) {
  return (
    <ButtonStyled type='button' {...props} minimize={minimize}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  disabled: PropTypes.bool,
  minimize: PropTypes.bool
}

Button.defaultProps = {
  invert: false,
  disabled: false,
  minimize: false
}

export default Button
