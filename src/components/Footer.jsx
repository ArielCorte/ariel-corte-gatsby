import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <Wrapper>
      <div>© 2022 Ariel Corte</div>
      <div>All rights reserved. Made with Gatsby</div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  text-align: center;
  background-color: var(--background-dark);
  padding: 1rem 0;
`

export default Footer
