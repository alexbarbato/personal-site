import styled from "styled-components"
import React from "react"
import { device } from "../../utils/breakpoints"
import { Header } from "../molecules/header"
import GlobalStyle from "../atoms/reset"

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.tabletOnly} {
    max-width: 800px;
  }
`

export const Layout = ({ activePage, children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header activePage={activePage ? activePage : null} />
      {children}
    </Grid>
  </>
)
