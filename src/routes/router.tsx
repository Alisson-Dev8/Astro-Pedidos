import {Routes, Route } from "react-router-dom"

import Home from "../pages/home/home"
import PageMovies from "../pages/pageMovies/page-movies"




export default function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/filmes" Component={PageMovies}/>             
        </Routes>
    )
}