import React from "react"
import styled from "styled-components"
import BtnSqr from "./BtnSqr.jsx"
import BtnRnd from "./BtnRnd.jsx"
import { BsGithub, BsTwitter } from "react-icons/bs"

const ContactInfo = () => {
  return (
    <Wrapper>
      <BtnSqr href="youtube.com">Resume</BtnSqr>
      <BtnRnd href="github.com">
        <BsGithub />
      </BtnRnd>
      <BtnRnd href="twitter.com">
        <BsTwitter />
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
