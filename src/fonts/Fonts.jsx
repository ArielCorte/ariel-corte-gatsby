import { createGlobalStyle } from "styled-components"
import AlataRegular from "./Alata_Regular.woff"

export default createGlobalStyle`
    @font-face {
        font-family: 'AlataRegular';
        src: local('AlataRegular'), url(${AlataRegular});
        font-weight: 400;
        font-style: normal;
    }
`
