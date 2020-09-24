import styled, { css } from 'styled-components'

const invert = css`
  background-color: var(--white);
  color: var(--blue);
  border: 1px solid var(--blue);
  &:hover{
    background-color: var(--white-alt);
  }
`

const disabled = css`
  background-color: var(--gray-light);
  pointer-events: none;
`

const minimize = css`
  height: 18px;
  font-size: 8px;
`
const shadow = css`
  box-shadow: 0 3px 6px 0 var(--black-16);
`

export const ButtonStyled = styled.button`
  background-color: var(--blue);
  border: 1px solid transparent;
  color: var(--white);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  font-size: 14px;
  ${props => props.minimize && minimize}
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s ease;
  text-transform: uppercase;
  line-height: 1.14;
  font-family: var(--font-medium);
  &:hover{
    background-color: var(--blue-hover);
  }
  ${props => props.invert && invert}
  ${props => props.disabled && disabled}
  ${props => props.shadow && shadow}
`
