import React from 'react'
import PropTypes from 'prop-types'
import { Wrapper, HintError } from './Select.style'

function Select ({ options, className, placeholder, fluid, validation, ...props }) {
  const nextProps = {}
  if (className) {
    nextProps.className = className
  }
  return (
    <>
      <Wrapper {...nextProps} fluid={fluid} validation={validation}>
        <select {...props}>
          {placeholder && <option value='' id=''>{placeholder}</option>}
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <i className='icon-arrow-down' />
      </Wrapper>
      {validation && <HintError className='helperText'>{validation.message}</HintError>}
    </>
  )
}

Select.propTypes = {
  options: PropTypes.array.isRequired,
  className: PropTypes.string,
  fluid: PropTypes.bool
}

Select.defaultProps = {
  fluid: false
}

export default Select
