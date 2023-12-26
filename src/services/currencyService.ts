import {apiService} from "./apiService";
import {urls} from "../constants";

const currencyService = {
    getAll: () => apiService.get(urls.currency)
}

export {
    currencyService
}