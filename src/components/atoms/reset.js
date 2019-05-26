import { createGlobalStyle } from "styled-components"

import { BACKGROUND_BASE } from "../../utils/colors"
import PermanentWoff from "../../../static/fonts/permanent-marker-v8-latin-regular.woff"

const GlobalStyle = createGlobalStyle`
    /* permanent-marker-regular - latin */
    @font-face {
    font-family: 'Permy';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/permanent-marker-v8-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Permanent Marker Regular'), local('PermanentMarker-Regular'),
        url('../fonts/permanent-marker-v8-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('../fonts/permanent-marker-v8-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
        url(${PermanentWoff}) format('woff'), /* Modern Browsers */
        url('../fonts/permanent-marker-v8-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
        url('../fonts/permanent-marker-v8-latin-regular.svg#PermanentMarker') format('svg'); /* Legacy iOS */
    }

    body {
        background-color: ${BACKGROUND_BASE};
    }
`

export default GlobalStyle
