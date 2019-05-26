import { createGlobalStyle } from "styled-components"

import { BACKGROUND_BASE } from "../../utils/colors"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${BACKGROUND_BASE};
        margin: 0;
    }
`

export default GlobalStyle
