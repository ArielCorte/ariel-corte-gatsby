import React from "react"
import styled from "styled-components"
import BtnSqr from "./BtnSqr.jsx"
import BtnRnd from "./BtnRnd.jsx"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const ContactInfo = () => {
  return (
    <Wrapper>
      <BtnSqr href="#">Resume</BtnSqr>
      <BtnRnd href="https://github.com/ArielCorte">
        <BsGithub />
      </BtnRnd>
      <BtnRnd href="https://www.linkedin.com/in/arielcorte">
        <BsLinkedin />
      </BtnRnd>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  a {
    margin-right: 0.5rem;
  }
`

export default ContactInfo
