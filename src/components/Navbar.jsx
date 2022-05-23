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
          <li>
            <Link to="/about">Tech</Link>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
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
`

export default Navbar
