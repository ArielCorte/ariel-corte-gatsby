import React from "react"
import styled from "styled-components"

const BtnSqr = ({ href, target, color, children }) => {
  return (
    <Button href={href} target={target} color={color}>
      {children}
    </Button>
  )
}

const Button = styled.a`
  display: inline-block;
  color: var(${props => props.color || "--primary-dark"});
  padding: 0.7rem 1.75rem;
  border: 1px solid var(${props => props.color || "--primary-dark"});
  border-radius: 1rem;
`

export default BtnSqr
