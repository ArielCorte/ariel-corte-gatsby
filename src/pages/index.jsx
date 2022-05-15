import React from "react"
import Layout from "../components/Layout.jsx"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import ContactInfo from "../components/ContactInfo.jsx"

export default function Home() {
  return (
    <>
      <Layout>
        <Wrapper>
          <div className="hero">
            <div className="hero-flex">
              <div className="hero-content">
                <p>Hi my name is</p>
                <h1>Ariel Corte.</h1>
                <h2>I build things for the web</h2>
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
          </div>
        </Wrapper>
      </Layout>
    </>
  )
}

const Wrapper = styled.main`
  .hero {
    height: 100vh;
    padding: 4rem 0;
  }

  .hero-flex {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  h1 {
    font-size: 5rem;
    font-weight: 200;
    color: var(--primary-dark);
  }

  h2 {
    font-size: 3rem;
    font-weight: 200;
  }

  .hero-content {
    width: 60%;
  }

  .description {
    margin-bottom: 4rem;
  }

  .hero-img {
    width: 25%;
    border-radius: 1rem;
    overflow: hidden;
  }

  .hero-img img {
    width: 100%;
  }
`
