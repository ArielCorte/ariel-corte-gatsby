import React from "react"
import styled from "styled-components"

const BtnSqr = ({ href, children }) => {
  return <Button href={href}>{children}</Button>
}

const Button = styled.a`
  display: inline-block;
  color: var(--primary-dark);
  padding: 0.7rem 1.75rem;
  border: 1px solid var(--primary-dark);
  border-radius: 1rem;
`

export default BtnSqr
