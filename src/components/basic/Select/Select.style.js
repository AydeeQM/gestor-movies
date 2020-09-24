import styled, { css } from 'styled-components'

const validation = css`
  border: solid 1px var(--red);
  outline-color: var(--red);
  color: var(--red);
`

export const Wrapper = styled.div`
  display: inline;
  position: relative;
  background-color: var(--white);
  select{
    appearance: none;
    position: relative;
    background-color: transparent;
    font-size: 12px;
    z-index: 1;
    font-family: var(--font-light);
    padding: 6px 10px 7px;
    padding-right: 30px;
    border-radius: 4px;
    border: 1px solid var(--border);
    ${props => props.fluid && 'width: 100%;'}
    ${props => props.validation && validation}
    :disabled {
      background-color: var(--white-alt);
      i{
        opacity: .5;      
      }
    }
  }
  select::-ms-expand{
    display: none;
  }
  i{
    position: absolute;
    right: 10px;
    top: 6px;
    font-size: 11px;
  }
  option{
    padding: 6px 10px 7px;
    font-size: 13px;
  }  
`
export const HintError = styled.span`
  color: var(--red);
`
