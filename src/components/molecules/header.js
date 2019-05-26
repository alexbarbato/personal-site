import styled from "styled-components"
import React from "react"
import { Link } from "gatsby"

import { SHMEDIUM, MEDIUM } from "../../utils/font-sizes"
import { BLACK, PINK } from "../../utils/colors"
import { TEXT_SHADOW } from "../../utils/shadows"
import { DEVICE } from "../../utils/breakpoints"

const HeaderBase = styled.header`
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
    text-shadow: ${TEXT_SHADOW};
  }

  ${({ active }) =>
    active &&
    `
    :hover::after {
        background-color: ${PINK};
        box-shadow: ${TEXT_SHADOW};
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

    @media ${DEVICE.phoneOnly} {
      font-size: ${SHMEDIUM};
    }
`

const Header = ({ activePage }) => (
  <HeaderBase>
    <HeaderLink active={activePage === "Home" ? "true" : null} to="/">
      Home
    </HeaderLink>
    <HeaderLink active={activePage === "About" ? "true" : null} to="/about">
      About
    </HeaderLink>
    {/* NO BLOG AS OF YET SO NO NEED FOR THE LINK */}
    {/* <HeaderLink active={activePage === "Blog" ? "true" : null} to="/blog">
      Blog
    </HeaderLink> */}
    <HeaderLink active={activePage === "Credits" ? "true" : null} to="/credits">
      Credits
    </HeaderLink>
  </HeaderBase>
)

export default Header
