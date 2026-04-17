import axios from "axios";


export const MovieApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_TMDB_BASE_URL,
  params: {
    language: "es-MX",
    api_key: process.env.EXPO_PUBLIC_TMDB_KEY,
  }
})