import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
`

export const InputHidden = styled.input`
  position: absolute;
  z-index: 1;
  width: 18px;
  height: 18px;
  opacity: 0;
  left: 0;
  &:checked + .checkbox--box{
    background-color: var(--blue);
    i {
      opacity: 1;
    }
  }
`

export const Box = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 2px;
  transition: .1s;
  border: 2px solid var(--blue);
  float: left;
  margin-right: 10px;
  font-size: 11px;
  padding-top: 1px;
  text-align: center;
  i{
    transition: .1s;
    color: var(--white);
    opacity: 0;
  }
`
