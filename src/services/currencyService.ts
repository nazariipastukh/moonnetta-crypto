import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const currencyService = {
    getAll: () => apiService.get(urls.currency)
}

export {
    currencyService
}