import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <Link to="/" className="logo">
          Ariel Corte
        </Link>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
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
