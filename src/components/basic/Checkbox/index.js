import React from 'react'
import { Wrapper, Box, InputHidden } from './Checkbox.style'

function Checkbox ({ ...props }) {
  return (
    <Wrapper>
      <InputHidden {...props} type='checkbox' />
      <Box className='checkbox--box'>
        <i>✔</i>
      </Box>
    </Wrapper>
  )
}

export default Checkbox
