import styled, { createGlobalStyle } from "styled-components"
import React from "react"
import { BACKGROUND_BASE } from "../utils/colors"
import { device } from "../utils/breakpoints"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${BACKGROUND_BASE};
  }
`

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tabletOnly} {
    max-width: 800px;
  }
`

export const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Grid>{children}</Grid>
  </>
)
