import React from "react"
import styled from "styled-components"

import { LARGE, XXLARGE } from "../../utils/font-sizes"
import { PINK } from "../../utils/colors"
import { TEXT_SHADOW } from "../../utils/shadows"
import { DEVICE } from "../../utils/breakpoints"

const HeroBase = styled.div`
  font-family: "Permanent Marker";
  font-size: ${XXLARGE};
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${DEVICE.tabletDown} {
    font-size: ${LARGE};
  }
`

const HeroLine = styled.div`
  ${({ pink }) =>
    pink &&
    `
        color: ${PINK}
        text-shadow: ${TEXT_SHADOW}
    `}
`

const Hero = () => (
  <HeroBase>
    <HeroLine>Web Developer</HeroLine>
    <HeroLine pink>Husband and Father</HeroLine>
    <HeroLine>Insistent Questioner</HeroLine>
  </HeroBase>
)

export default Hero
