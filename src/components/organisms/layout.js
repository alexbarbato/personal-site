import styled from "styled-components"
import React from "react"
import { DEVICE } from "../../utils/breakpoints"
import Header from "../molecules/header"
import Footer from "../molecules/footer"
import GlobalStyle from "../atoms/reset"

const Grid = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;

  @media ${DEVICE.tabletOnly} {
    max-width: 800px;
  }
`

const Main = styled.main`
  display: flex;

  /**
    Admittedly a bit magic number-y effects to get a no-scroll
    min setting for height of the main block
   */
  min-height: 90vh;
  @media ${DEVICE.phoneOnly} {
    min-height: 85vh;
  }
`

export const Layout = ({ activePage, children }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header activePage={activePage ? activePage : null} />
      <Main>{children}</Main>
      <Footer />
    </Grid>
  </>
)
