const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

interface CardMoviesProps {
    movie: {
        id: number;
        title?: string;
        name?: string;
        poster_path?: string;
        realese_date?: string;
        first_air_date?: string;
        overview?: string;
    };
}
const CardMovies: React.FC<CardMoviesProps> = ({ movie }) => {
    return (
        <div className="flex flex-row w-[550px] bg-slate-600 pt-10 pb-10 pl-6 pr-6 mt-4 shadow-lg rounded" key={movie.id}>
            <div>
                <div className="flex flex-col justify-center items-center mr-8">
                    <div className="w-[150px] h-[225px]">
                        {movie.poster_path ? (
                            <img
                                src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                                alt={movie.title || movie.name}
                                className=" rounded-md"
                            />
                        ) : (
                            <div className="h-64 bg-gray-700 flex items-center justify-center text-gray-400">
                                Sem Imagem
                            </div>
                        )}
                    </div>
                </div>
                <div className="text-zinc-50">
                    <h1 className="text-xl mb-2 text-zinc-50">
                        {movie.title || movie.name}
                    </h1>
                    <p className="mb-2 text-zinc-50">
                        <strong>Ano: {movie.realese_date || movie.first_air_date || "Sem data"}</strong>
                    </p>
                    <p className=" text-sm mb-4"></p>
                    <strong className="text-semibold text-zinc-900" >Sinopse: {movie.overview || "Sinopse não disponível"}</strong>
                    <button className="w-full h-10 bg-red-600 hover:bg-red-700 text-zinc-50 rounded-md" >
                        Enviar Pedido
                    </button>

                </div>
            </div>
        </div>
    )
}
export default CardMovies;


