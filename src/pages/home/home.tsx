import { Header } from "../../components/header";
import MovieForm from "../movieForm/movie-form";
import { Footer } from "../../components/footer"

//import { Button } from "../../components/button";


export default function Home() {
    return (
        <div className=" bg-slate-900">
            <Header />
            <MovieForm />
            <Footer />
        </div>
    )
}