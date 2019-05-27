import React from "react"
import styled from "styled-components"

import { SMALL, TINY } from "../../utils/spacing"

import EMAIL from "../../../static/icons/email.png"
import GITHUB from "../../../static/icons/github.png"
import LINKEDIN from "../../../static/icons/linkedin.png"

const FooterBase = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Roboto";
  padding: ${SMALL}px 0;
`

const FooterLink = styled.a`
  cursor: pointer;
  margin-right: ${TINY}px;
`

const FooterLinkImage = styled.img`
  max-width: 30px;
`

const FooterText = styled.div`
  max-width: 50%;
  text-align: right;
`

const Footer = () => (
  <FooterBase>
    <div>
      <FooterLink href="https://github.com/alexbarbato" target="_blank">
        <FooterLinkImage src={GITHUB} />
      </FooterLink>
      <FooterLink
        href="https://www.linkedin.com/in/alex-barbato-33ab7a66/"
        target="_blank"
      >
        <FooterLinkImage src={LINKEDIN} />
      </FooterLink>
      <FooterLink href="mailto:alex.j.barbato@gmail.com">
        <FooterLinkImage src={EMAIL} />
      </FooterLink>
    </div>
    <FooterText>Made and owned by Alex Barbato</FooterText>
  </FooterBase>
)

export default Footer
