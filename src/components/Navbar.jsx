import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import BtnSqr from "./BtnSqr"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="logo">
          Ariel Corte
        </Link>
        <ul>
          <li className="navLink">
            <a href="#projects">Projects</a>
          </li>
          <li className="cta">
            <BtnSqr href="#contact" color="--highlight-color">
              Contact Me
            </BtnSqr>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
  box-shadow: 0 0 0 1px black;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
  }

  .logo {
    font-size: 2rem;
    padding: 1rem 0;
  }

  ul {
    text-decoration: none;
    list-style: none;
    text-align: right;
  }
  ul li {
    display: inline-block;
    padding: 1rem;
  }

  a:hover {
    color: var(--highlight-color);
  }

  @media screen and (max-width: 460px) {
    .navLink {
      display: none;
    }

    .cta {
      display: inline;
      font-size: 0.8rem;
      padding: 0;
    }
  }
`

export default Navbar
