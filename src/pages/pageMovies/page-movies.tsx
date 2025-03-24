import { Header } from "../../components/header";
import CardMovies from '../../components/card-movies';
import { Footer } from "../../components/footer";
import { useEffect, useState } from 'react';
//import api from '../../services/api';

import axios from "axios";

const API_KEY = "aefaf9ef817814bdb8421b06c38b6421";
const API_URL = "https://api.themoviedb.org/3/search/movie";

interface Movie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
}

export default function PageMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");;

    useEffect(() => {
        if (search) {
            axios
                .get(`${API_URL}`, {
                    params: {
                        api_key: API_KEY,
                        search,
                        language: "pt-BR",
                    },
                })
                .then((response) => setMovies(response.data.results || []))
                .catch((error) => console.error("Erro ao buscar filmes:", error));
        }
    }, [search]);

    return (
        <div className=" bg-slate-900">
            <Header />
            <main className="flex justify-center items-center bg-slate-900 mt-10 mb-40 mr-8 ml-8 md:mx-auto">
                {movies.length > 0 ? (
                    movies.map((movie) => <CardMovies key={movie.id} movie={movie} />)
                ) : (
                    <p className="h-96 flex justify-center items-center text-center col-span-3 text-white">Nenhum resultado encontrado...</p>
                )}
            </main>
            <Footer />
        </div>
    )
}
