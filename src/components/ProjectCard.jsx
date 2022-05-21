import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { FaGithub } from "react-icons/fa"
import { BsFillArrowRightCircleFill } from "react-icons/bs"
import { IconContext } from "react-icons"

const ProjectCard = ({ title, repo, demo, thumbnail }) => {
  console.log(thumbnail)

  return (
    <Card>
      <div className="content">
        <div className="img-wrapper">
          <StaticImage
            className="img"
            src={"../assets/images/ttd_ss.png"}
            alt="Project Preview"
          />
        </div>
        <h3 className="title">{title || "Code Project"}</h3>
        <p>
          Time tracking dashboard from FrontendMentor challenge. Built with
          Create React App
        </p>
      </div>
      <div className="footer">
        {repo ? (
          <a href={repo} target="_blank">
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <FaGithub />
            </IconContext.Provider>
          </a>
        ) : null}
        {demo ? (
          <a href={demo} target="_blank">
            Demo
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <BsFillArrowRightCircleFill />
            </IconContext.Provider>
          </a>
        ) : null}
      </div>
    </Card>
  )
}

const Card = styled.div`
  width: 18rem;
  border-radius: 2rem;
  overflow: hidden;
  color: var(--secondary-dark);
  background-color: var(--background-dark);
  aspect-ratio: 1 / 1.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    padding: 1rem;
  }

  .img-wrapper {
    width: 100%;
    border-radius: 1rem;
    overflow: hidden;
    aspect-ratio: 16/9;
  }

  .title {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .footer {
    height: 3rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-shadow: 0 0 0 1px var(--background-darker);
  }

  .footer a {
    display: flex;
  }

  .footer svg {
    margin-left: 0.3rem;
  }
`

export default ProjectCard
