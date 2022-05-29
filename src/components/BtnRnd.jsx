import React from "react"
import styled from "styled-components"

const BtnRnd = ({ href, target, children }) => {
  return (
    <Button href={href} target={target}>
      {children}
    </Button>
  )
}

const Button = styled.a`
  display: inline-block;
  color: var(--primary-dark);
  padding: 0.7rem;
  border: 1px solid var(--primary-dark);
  border-radius: 50%;
  line-height: 0%;

  :hover {
    border-color: var(${props => props.color || "--highlight-color"});
    color: var(${props => props.color || "--highlight-color"});
  }
`

export default BtnRnd
