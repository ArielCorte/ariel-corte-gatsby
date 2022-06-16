import React from "react"
import Layout from "../components/Layout.jsx"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ContactInfo from "../components/ContactInfo.jsx"
import CardCarrousel from "../components/CardCarrousel.jsx"
import ProjectCard from "../components/ProjectCard.jsx"
import Contact from "../components/Contact.jsx"
import time_tracker_dashboard from "../assets/images/ttd_ss.png"
import { Helmet } from "react-helmet"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Ariel Corte</title>
        <meta
          name="google-site-verification"
          content="cStaDLGvdgamHap3eR8rXBx-lwPhfCO5IpSypPJsbYo"
        />
      </Helmet>
      <Layout>
        <Wrapper>
          <section id="hero" className="hero">
            <div className="hero-grid">
              <p>Hi my name is</p>
              <h1>Ariel Corte</h1>
              <h2 className="subtitle">I build things for the web</h2>
              <p className="description">
                A passionate web app developer. I tend to make use of modern web
                technologies to build websites that looks great, feels
                fantastic, and functions correctly.
              </p>
              <ContactInfo />
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
              <div className="email-form-container">
                <Contact />
              </div>
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

  .hero-grid {
    margin: auto;
    display: grid;
    grid-template-columns: 2.2fr 1fr;
    grid-template-rows: repeat(5, fit-content);
    align-items: center;
    justify-content: space-evenly;
    column-gap: 1rem;
    padding: 0 2.5rem;
  }

  .subtitle {
    color: var(--secondary-dark);
  }

  .description {
    margin-bottom: 4rem;
  }

  .hero-img {
    border-radius: 1rem;
    overflow: hidden;
    grid-row: 1 / span 5;
    grid-column-start: 2;
    align-self: center;
    justify-self: center;
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
    gap: 2rem;
  }

  .email-form-container {
    width: 50%;
  }

  .other-contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
  }

  @media screen and (max-width: 460px) {
    .hero-grid {
      grid-template-columns: 1fr;
      text-align: center;
      padding: 0 1rem;
    }

    .hero h1 {
      line-height: 4rem;
      margin-top: 0.5rem;
      margin-bottom: 3rem;
    }

    .hero-img {
      grid-row: 3 / span 1;
      grid-column-start: 1;
      align-self: center;
      justify-self: center;
      width: 80%;
    }

    .subtitle {
      font-size: 2rem;
    }

    .contact-container {
      flex-direction: column;
    }

    .email-form-container {
      width: 90%;
    }

    .other-contact h3 {
      font-size: 1rem;
    }
  }
`
