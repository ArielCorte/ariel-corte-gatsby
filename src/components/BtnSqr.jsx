import React from "react"
import styled from "styled-components"

const BtnSqr = ({ href, children }) => {
  const Button = styled.a.attrs(props => ({ href: href }))`
    display: inline-block;
    color: var(--primary-dark);
    padding: 0.7rem 1.75rem;
    border: 1px solid var(--primary-dark);
    border-radius: 1rem;
  `

  return <Button>{children}</Button>
}

export default BtnSqr
