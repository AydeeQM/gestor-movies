import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { InputStyled } from './Input.style'

function Input ({ validation, autoFocus, minimize, transparent, inputRef, hidden, ...props }) {
  const [isShowed, setIsShowed] = useState(false)
  const setType = isShowed ? { type: 'text' } : { type: 'password' }
  const nextProps = {}
  if (autoFocus) {
    nextProps.autoFocus = true
  }

  if (inputRef) {
    nextProps.ref = inputRef
  }

  useEffect(() => {
    setIsShowed(false)
  }, [props.showpass])

  return (
    <InputStyled validation={validation} minimize={minimize} transparent={transparent} type={props.type} hidden={hidden}>
      <input {...props} {...nextProps} {...props.type === 'password' && setType} />
      {validation && <span className='helperText'>{validation.message}</span>}
    </InputStyled>
  )
}

Input.propTypes = {
  name: PropTypes.string,
  validation: PropTypes.oneOfType([PropTypes.bool, PropTypes.object, PropTypes.string]),
  minimize: PropTypes.bool,
  autoFocus: PropTypes.bool,
  transparent: PropTypes.bool,
  inputRef: PropTypes.any,
  hidden: PropTypes.bool
}

Input.defaultProps = {
  color: 'default',
  validation: false,
  minimize: false,
  transparent: false
}

export default Input
