import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL Da API: /search/movie?api_key=
// Chave da API: aefaf9ef817814bdb8421b06c38b6421

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api; 