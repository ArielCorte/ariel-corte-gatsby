import React from "react"
import Layout from "../components/Layout.jsx"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ContactInfo from "../components/ContactInfo.jsx"
import CardCarrousel from "../components/CardCarrousel.jsx"
import Contact from "../components/Contact.jsx"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <section id="hero" className="hero">
            <div className="hero-flex">
              <div className="hero-content">
                <p>Hi my name is</p>
                <h1>Ariel Corte.</h1>
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
            <CardCarrousel />
          </section>
          <section id="contact">
            <h2 className="section-title">Contact Me</h2>
            <Contact />
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
`
