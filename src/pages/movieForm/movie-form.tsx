import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/input/input";

type RequestType = "Adicionar" | "Erro de Reprodução";
type MediaType = "Filmes" | "Series";


/*interface MovieFormProps {
    search: string;
    selectedRequest: string;
    selectedMovieOrSeries: string;
    observationInput: string;
}*/

/*type Movie = {
    id: number;
}*/



export default function MovieForm() {
    const [search, setSearch] = useState<string>("");
    const [selectedRequest, setSelectedRequest] = useState<RequestType>("Adicionar")
    const [selectedMovieOrSeries, setSelectedMovieOrSeries] = useState<MediaType>("Filmes");
    const [observationInput, setObservationInput] = useState<string>("");
    

    const navigate = useNavigate();

    const searchMovies = (e: FormEvent) => {
        e.preventDefault();


        const mediaType = selectedMovieOrSeries === "Filmes" ? "Filmes" : "Series";
        navigate(`/${mediaType}?search=${encodeURIComponent(search)}`)

    }

    return (
        <div className="bg-gray-800  max-w-lg p-6 shadow-md rounded-lg mt-10 mb-40 mr-8 ml-8 md:mx-auto">
            <div className="flex justify-center">
                <h2 className="text-xl text-zinc-300 font-semibold mb-4">Adicionar Filmes ou Séries</h2>
            </div>
            <form className="space-y-4" onSubmit={searchMovies}>
                <div>
                    <label className="block text-sm text-zinc-300 font-medium mb-1">Título:</label>
                    <Input
                        placeholder="Digite seu Titulo..."
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm text-zinc-300 font-medium mb-1">Solicitação Para:</label>
                    <select
                        value={selectedRequest}
                        onChange={(e) => setSelectedRequest(e.target.value as RequestType)}
                        className="w-full p-2 border rounded-md"
                        required
                    >
                        <option value="Adicionar">Adicionar</option>
                        <option value="ErrodeReproducao">Erro de Reprodução</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm text-zinc-300 font-medium mb-1">Filmes ou Séries:</label>
                    <select
                        value={selectedMovieOrSeries}
                        onChange={(e) => setSelectedMovieOrSeries(e.target.value as MediaType)}
                        className="w-full p-2 border rounded-md"
                        required
                    >
                        <option value="Filmes">Filmes</option>
                        <option value="Series">Séries</option>
                    </select>
                    {selectedMovieOrSeries === "Series" && (
                        <div className="mt-4">
                            <label className="text-sm text-zinc-300 font-medium "> Observação:</label>
                            <Input
                                placeholder="Ex: Série, temporada ou episódio específico"
                                type="text"
                                value={observationInput}
                                onChange={(e) => setObservationInput(e.target.value)}
                                className="w-full p-2 pb-24 border rounded-md"
                            />
                        </div>
                    )}
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-2 rounded-md">
                        Buscar
                </button >
            </form>
        </div>
    )
}



/*console.log({
    titleInput: titleInput,
    observationInput: observationInput,
    selectedRequest: selectedRequest,
    selectedMovieOrSeries: selectedMovieOrSeries
})*/

/*function handleSubmit(e: FormEvent) {
        e.preventDefault();        
        if (titleInput === "") return;
        navigate(`/filmes/`)
    }*/

/*        (movies.map((movie) => <CardMovies key={movie.id} movie={movie} />)
                        ) : (
                            <p className="text-center col-span-3">Nenhum resultado encontrado.</p>
                        )}*/


/*  const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get(`${search}/movie/`, {
                params: {
                    api_key: API_KEY,
                    language: "pt-BR",
                    page: 1,
                }
            })
            setMovies(response.data.results)
            navigate(`/filmes?search=${search}`)
            //console.log(response.data.results)
        }
        loadFilmes()
    }, [])*/                            
