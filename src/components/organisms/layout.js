import styled from "styled-components"
import React from "react"
import { DEVICE } from "../../utils/breakpoints"
import Header from "../molecules/header"
import Footer from "../molecules/footer"
import GlobalStyle from "../atoms/reset"
import { SMALL } from "../../utils/spacing"

const Grid = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 ${SMALL}px;

  @media ${DEVICE.tabletDown} {
    max-width: 800px;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
`

export const Layout = ({ activePage, children, column }) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header activePage={activePage ? activePage : null} />
      <Main column={column}>{children}</Main>
      <Footer />
    </Grid>
  </>
)
