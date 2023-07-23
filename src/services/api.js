import axios from "axios";

export const api = axios.create({
   baseURL: `https://food-explorer-back-jjb4.onrender.com`
})