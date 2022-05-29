import React from "react"
import ProjectCard from "./ProjectCard"
import styled from "styled-components"

const CardCarrousel = ({ children }) => {
  return <Carrousel>{children}</Carrousel>
}

const Carrousel = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > div {
    margin: 1rem;
  }
`

export default CardCarrousel
