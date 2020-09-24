import styled, { css } from 'styled-components'

const validation = css`
  border: solid 1px var(--red);
  outline-color: var(--red);
`

export const InputStyled = styled.div`
  position: relative;
  text-align: left;
  ${props => props.hidden && css`
    display: none;
  `}
  input{
    height: ${props => props.minimize ? '24px' : '30px'};
    border-radius: 4px;
    width: 100%;
    display: block;
    font-size: 14px;
    line-height: 0.07;
    letter-spacing: 0.15px;
    font-family: var(--font-light);
    border: solid 1px var(--gray-light);
    padding-left: 7px;
    padding-right: 7px;
    color: var(--black);
    ${props => props.validation && validation};
    &:disabled{
      background-color: var(--white-alt);
    };
    &::placeholder {
      ${props => props.transparent && 'color: transparent'}
    };
    &:read-only{
      background-color: var(--white-alt);
    }
    ${props => props.type === 'password' && 'padding-right: 25px'};
  }  
  .helperText{    
    color: var(--red);
    margin-top: 6px;
  }
`
