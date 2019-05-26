import styled from "styled-components"
import React from "react"
import { DEVICE } from "../../utils/breakpoints"
import { Header } from "../molecules/header"
import GlobalStyle from "../atoms/reset"

const Grid = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media ${DEVICE.tabletOnly} {
    max-width: 800px;
  }
`

export const Layout = ({ activePage, children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header activePage={activePage ? activePage : null} />
      <main>{children}</main>
    </Grid>
  </>
)
