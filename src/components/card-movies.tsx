import { useState } from "react";
import axios from "axios";

import { Loader } from "lucide-react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const TELEGRAM_BOT_TOKEN = "7705035711:AAGnQIE7brj3cC6HvS19Pu54jdaueC9daJ4";
const TELEGRAM_CHAT_ID = "-1002551286750";


export interface Movie {
    id: number;
    title?: string;
    name?: string;
    poster_path?: string;
    release_date?: string;
    first_air_date?: string;
    primary_release_year: string;
    overview?: string;
}

interface CardMoviesProps {
    movie: Movie
}

const CardMovies: React.FC<CardMoviesProps> = ({ movie }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleSendToTelegram = async () => {
        setIsLoading(true);

        const titulo = movie.title || movie.name || "Sem título";
        const ano = movie.release_date || movie.primary_release_year || "Sem data";
        const sinopse = movie.overview || "Sinopse não disponível";
        const imagemUrl = movie.poster_path
            ? `${IMAGE_BASE_URL}${movie.poster_path}`
            : "Sem imagem disponível";

        const mensagem = `🎬 *Pedido de Série/Filme*\n\n*📌 Título:* ${titulo}\n*📅 Ano:* ${ano}\n\n*📝 Sinopse:* ${sinopse}\n\n🖼️ ${imagemUrl}`;

        try {
            await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
                chat_id: TELEGRAM_CHAT_ID,
                text: mensagem,
                parse_mode: "Markdown",
            })
            alert("Pedido enviado com sucesso via Telegram!");
            setIsLoading(false)
        } catch (error) {
            console.error("Erro ao enviar para o Telegram:", error);
            alert("Erro ao enviar mensagem.");
        }

    };
    return (
        <div className="flex flex-row w-[550px] bg-slate-600 pt-10 pb-10 pl-6 pr-6 mt-4 shadow-lg rounded" key={movie.id}>
            <div className="flex flex-row">
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
                        <strong>Ano: {movie.release_date || movie.primary_release_year || "Sem data"}</strong>
                    </p>
                    <p className=" text-sm mb-4">
                        <strong className="text-semibold text-zinc-900" >Sinopse: </strong>
                        {movie.overview || "Sinopse não disponível"}
                    </p>
                    <button
                        className="w-full h-10 flex justify-center items-center bg-red-600 hover:bg-red-700 text-zinc-50 rounded-md"
                        onClick={handleSendToTelegram}
                    >
                        {isLoading ? (
                            <>
                                <Loader className="w-5 h-5  animate-spin" />
                            </>
                        ) : (
                            "Enviar Pedido"
                        )}
                    </button>

                </div>
            </div>
        </div>
    )
}
export default CardMovies;


