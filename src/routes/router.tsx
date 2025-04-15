import {Routes, Route } from "react-router-dom"

import Home from "../pages/home/home"
import PageMovies from "../pages/pageMovies/page-movies"
import PageSeries from "../pages/pageSeries/page-series"




export default function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/filmes" Component={PageMovies}/>
            <Route path="/series" Component={PageSeries}/>               
        </Routes>
    )
}