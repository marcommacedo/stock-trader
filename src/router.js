import Vue from "vue"
import Router from "vue-router"

import Home from "./Components/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Stocks from "./Components/Stocks/Stocks"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/portfolio",
            component: Portfolio
        },
        {
            path: "/stocks",
            component: Stocks
        }
    ]
})
