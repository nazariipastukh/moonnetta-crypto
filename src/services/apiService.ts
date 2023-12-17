import axios, {AxiosInstance} from "axios";

const baseURL = 'https://api.coingecko.com/api/v3'

const apiService: AxiosInstance = axios.create({baseURL})

export {
    baseURL,
    apiService
}