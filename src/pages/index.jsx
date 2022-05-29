import React from "react"
import Layout from "../components/Layout.jsx"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ContactInfo from "../components/ContactInfo.jsx"
import CardCarrousel from "../components/CardCarrousel.jsx"
import ProjectCard from "../components/ProjectCard.jsx"
import Contact from "../components/Contact.jsx"
import time_tracker_dashboard from "../assets/images/ttd_ss.png"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <section id="hero" className="hero">
            <div className="hero-flex">
              <div className="hero-content">
                <p>Hi my name is</p>
                <h1>Ariel Corte</h1>
                <h2 className="subtitle">I build things for the web</h2>
                <p className="description">
                  A passionate web app developer. I tend to make use of modern
                  web technologies to build websites that looks great, feels
                  fantastic, and functions correctly.
                </p>
                <ContactInfo />
              </div>
              <div className="hero-img">
                <StaticImage
                  src="../assets/images/foto-perfil-ariel.jpg"
                  alt="Ariel Corte"
                />
              </div>
            </div>
          </section>
          <section id="projects">
            <h2 className="section-title">Projects</h2>
            <CardCarrousel>
              <ProjectCard
                title="Amiibo store"
                description="E-commerce mockup built with Create React App, React Router, Redux and amiibo api."
                repo="https://github.com/ArielCorte/arielcorte-amiibo"
                demo="https://arielcorte-amiibo.vercel.app"
                thumbnail={time_tracker_dashboard}
              >
                <StaticImage
                  className="pc-img"
                  src={"../assets/images/as_ss.png"}
                  alt="Project Preview"
                />
              </ProjectCard>
              <ProjectCard
                title="Time tracker dashboard"
                description="Time tracking dashboard from FrontendMentor challenge. Built with Create React App"
                repo="https://github.com/ArielCorte/time-tracking-dashboard-FM"
                demo="https://arielcorte-time-tracking-dashboard-fm.vercel.app"
              >
                <StaticImage
                  className="img"
                  src={"../assets/images/ttd_ss.png"}
                  alt="Project Preview"
                />
              </ProjectCard>
              <ProjectCard
                title="Flashcard quiz"
                description="A flashcard quiz built with Create React App and Open Trivia Database API."
                repo="https://github.com/ArielCorte/flashcard-quiz"
                demo="https://arielcorte-flashcard-quiz.vercel.app"
                thumbnail={time_tracker_dashboard}
              >
                <StaticImage
                  className="img"
                  src={"../assets/images/fcq_ss.png"}
                  alt="Project Preview"
                />
              </ProjectCard>
            </CardCarrousel>
          </section>
          <section id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
              <Contact />
              <div className="other-contact">
                <h3>You can also contact me by</h3>
                <ContactInfo />
              </div>
            </div>
          </section>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.main`
  .hero {
    padding: 4rem 0;
  }

  .hero-flex {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .subtitle {
    color: var(--secondary-dark);
  }

  .hero-content {
    width: 60%;
  }

  .description {
    margin-bottom: 4rem;
  }

  .hero-img {
    width: 28%;
    border-radius: 1rem;
    overflow: hidden;
  }

  .hero-img img {
    width: 100%;
  }

  .section-title {
    text-align: center;
  }

  .contact-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .other-contact {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`
