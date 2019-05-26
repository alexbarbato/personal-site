import React from "react"
import styled from "styled-components"
import { SMALL } from "../../utils/spacing"

const FooterBase = styled.footer`
  text-align: right;
  font-family: "Roboto";
  padding: ${SMALL}px 0;
`

const Footer = () => <FooterBase>Made and owned by Alex Barbato</FooterBase>

export default Footer
