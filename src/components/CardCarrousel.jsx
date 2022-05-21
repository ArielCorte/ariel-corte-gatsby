import React from "react"
import ProjectCard from "./ProjectCard"
import styled from "styled-components"

const CardCarrousel = () => {
  return (
    <Carrousel>
      <ProjectCard
        title="Time Tracker Dashboard"
        repo="https://github.com/ArielCorte/time-tracking-dashboard-FM"
        demo="https://arielcorte-time-tracking-dashboard-fm.vercel.app/"
      />
      <ProjectCard
        title="Flashcard Quiz"
        repo="https://github.com/ArielCorte/flashcard-quiz"
        demo="https://arielcorte-flashcard-quiz.vercel.app/"
      />
      <ProjectCard
        title="Flashcard Quiz"
        repo="https://github.com/ArielCorte/flashcard-quiz"
        demo="https://arielcorte-flashcard-quiz.vercel.app/"
      />
      <ProjectCard
        title="Time Tracker Dashboard"
        repo="https://github.com/ArielCorte/time-tracking-dashboard-FM"
        demo="https://arielcorte-time-tracking-dashboard-fm.vercel.app/"
      />
      <ProjectCard
        title="Flashcard Quiz"
        repo="https://github.com/ArielCorte/flashcard-quiz"
        demo="https://arielcorte-flashcard-quiz.vercel.app/"
      />
      <ProjectCard
        title="Flashcard Quiz"
        repo="https://github.com/ArielCorte/flashcard-quiz"
        demo="https://arielcorte-flashcard-quiz.vercel.app/"
      />
    </Carrousel>
  )
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
