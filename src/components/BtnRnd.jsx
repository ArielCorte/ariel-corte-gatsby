import React from "react"
import styled from "styled-components"

const BtnRnd = ({ href, children }) => {
  const Button = styled.a.attrs(props => ({ href: href }))`
    display: inline-block;
    color: var(--primary-dark);
    padding: 0.7rem;
    border: 1px solid var(--primary-dark);
    border-radius: 50%;
    line-height: 0%;
  `

  return <Button>{children}</Button>
}

export default BtnRnd
