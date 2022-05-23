import { createGlobalStyle } from "styled-components"
import AlataRegular_woff from "./Alata_Regular.woff"
import AlataRegular_woff2 from "./Alata_Regular.woff2"

export default createGlobalStyle`
    @font-face {
        font-family: 'AlataRegular';
        src: local('AlataRegular'), url(${AlataRegular_woff2}) format("woff2"), url(${AlataRegular_woff}) format("woff");
        font-weight: 400;
        font-style: normal;
    }
`
