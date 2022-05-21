import React from "react"
import styled from "styled-components"

const BtnRnd = ({ href, children }) => {
  return <Button href={href}>{children}</Button>
}

const Button = styled.a`
  display: inline-block;
  color: var(--primary-dark);
  padding: 0.7rem;
  border: 1px solid var(--primary-dark);
  border-radius: 50%;
  line-height: 0%;
`

export default BtnRnd
