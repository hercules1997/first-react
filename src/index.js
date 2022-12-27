import React from "react"
import ReactDOM from "react-dom"
import GlobalStyle from "./styles/globalStyles"
import MyRouters from './routes'

ReactDOM.render(
    <>
        <MyRouters />
        <GlobalStyle />
    </>,
    document.getElementById("root"));



