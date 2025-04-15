import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useEffect, useState } from 'react';
import CardSeries from "../../components/card-series";
import axios from "axios";

const API_KEY = "aefaf9ef817814bdb8421b06c38b6421";
const API_URL = "https://api.themoviedb.org/3/search/tv";

interface Series {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
}

export default function PageSeries() {
    const [series, setSeries] = useState<Series[]>([]);
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");;

    useEffect(() => {
        if (search) {
            axios
                .get(`${API_URL}`, {
                    params: {
                        api_key: API_KEY,
                        query: search,
                        language: "pt-BR",
                    },
                })
                .then((response) => setSeries(response.data.results || []))
                .catch((error) => console.error("Erro ao buscar series:", error));
        }
    }, [search]);

    return (
        <div className=" bg-slate-900">
            <Header />
            <main className="flex flex-col justify-center items-center bg-slate-900 mt-10 mb-40 mr-8 ml-8 md:mx-auto">
                {series.length > 0 ? (
                    series.map((series) => <CardSeries key={series.id} series={series} />)
                ) : (
                    <p className="h-96 flex justify-center items-center text-center col-span-3 text-white">Nenhum resultado encontrado...</p>
                )}
            </main>
            <Footer />
        </div>
    )
}