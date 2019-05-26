import styled from "styled-components"
import React from "react"
import { MEDIUM } from "../utils/font-sizes"
import { BLACK, PINK } from "../utils/colors"
import { Link } from "gatsby"

const HeaderBase = styled.header`
  height: 3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HeaderLink = styled(props => <Link {...props} />)`
  position: relative;
  text-decoration: none;
  color: ${BLACK};
  margin-left: 1rem;
  font-size: ${MEDIUM};
  font-family: "Permanent Marker";

  :hover {
    color: ${PINK};
    text-shadow: ${BLACK} 1px 1px;
  }

  ${({ active }) =>
    active &&
    `
    :hover::after {
        background-color: ${PINK};
    }

    ::after {
        content: "";
        background-color: ${BLACK};
        position: absolute;
        bottom: 1px;
        left: 0;
        height: 3px;
        width: 100%;
    }`}
`

export const Header = ({ activePage }) => (
  <HeaderBase>
    <HeaderLink active={activePage === "Home" ? "true" : null} to="/">
      Home
    </HeaderLink>
    <HeaderLink active={activePage === "About" ? "true" : null} to="/about">
      About
    </HeaderLink>
    <HeaderLink active={activePage === "Blog" ? "true" : null} to="/blog">
      Blog
    </HeaderLink>
    <HeaderLink active={activePage === "Credits" ? "true" : null} to="/credits">
      Credits
    </HeaderLink>
  </HeaderBase>
)
