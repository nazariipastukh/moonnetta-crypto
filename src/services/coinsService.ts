import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const coinsService = {
    getAll: () => apiService.get(urls.list)
}

export {
    coinsService
}