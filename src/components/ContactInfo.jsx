import React from "react"
import styled from "styled-components"
import BtnSqr from "./BtnSqr.jsx"
import BtnRnd from "./BtnRnd.jsx"
import { BsGithub, BsLinkedin } from "react-icons/bs"

const ContactInfo = () => {
  return (
    <Wrapper>
      <BtnSqr href="https://drive.google.com/uc?export=download&id=1bNnzqL9ar-0iTVAfURZMMk8xZmBpbAvU">
        Resume
      </BtnSqr>
      <BtnRnd href="https://github.com/ArielCorte" target="_blank">
        <BsGithub />
      </BtnRnd>
      <BtnRnd href="https://www.linkedin.com/in/arielcorte" target="_blank">
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
