import React, { useState } from "react"
import styled from "styled-components"

const Contact = () => {
  const lineHeight = 1
  const paddingHeight = 1
  const borderWidth = 0.2
  const maxHeight = 15 + paddingHeight * 2 + borderWidth * 2

  const [lineBreaks, setLineBreaks] = useState(
    1 + paddingHeight * 2 + borderWidth * 2
  )

  const handleChange = e => {
    if (typeof e.target.value !== "undefined") {
      setLineBreaks(
        Math.trunc(
          (e.target.value.split("\n") || [])
            .map(line => line.length / 70)
            .reduce((partialSum, a) => partialSum + a, 0) +
            (e.target.value.split("\n") || []).length
        ) *
          lineHeight +
          paddingHeight * 2 +
          borderWidth * 2
      )
    }
  }

  return (
    <EmailForm lineBreaks={lineBreaks} maxHeight={maxHeight}>
      <form
        className="emailform"
        action="https://formsubmit.co/cortearielformal@gmail.com"
        method="POST"
      >
        <div className="textinput-container">
          <input
            className="textinput"
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
          />
        </div>
        <div className="textinput-container">
          <input
            className="textinput"
            type="text"
            name="_subject"
            id=""
            placeholder="Subject"
          />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          onChange={handleChange}
        ></textarea>
        <input
          type="hidden"
          name="_next"
          value="https://arielcorte.vercel.app/#contact"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" className="honey" />
        <input className="submitinput" type="submit" value="Send" />
      </form>
    </EmailForm>
  )
}

const EmailForm = styled.div`
  width: 30rem;

  .emailform {
    display: flex;
    flex-direction: column;
  }

  .textinput,
  textarea {
    color: var(--primary-dark);
    background: transparent;
    margin: 1rem 0;
    width: 100%;
  }

  .textinput {
    padding: 0 0.5rem;
    border: none;
  }

  textarea {
    border: 0.2rem solid var(--background-dark);
    border-radius: 1rem;
    padding: 1rem 0.3rem;
    resize: none;
    height: ${props => props.lineBreaks.toString()}rem;
    max-height: ${props => props.maxHeight.toString()}rem;
    line-height: 1rem;
    overflow: hidden;
  }

  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--highlight-color);
  }

  .textinput-container {
    position: relative;
  }

  .textinput-container::after {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 0.2rem;
    width: 100%;
    background-color: var(--background-dark);
    border-radius: 9999rem;
  }

  .textinput-container:focus-within::after {
    background-color: var(--highlight-color);
  }

  .submitinput {
    align-self: flex-end;
    color: var(--primary-dark);
    padding: 0.7rem 1.75rem;
    border-radius: 1rem;
    border: none;
    background-color: var(--background-dark);
  }

  .submitinput:hover {
    background-color: var(--highlight-color);
    cursor: pointer;
  }

  .honey {
    display: none;
  }
`

export default Contact
