import {apiService} from "./apiService";
import {urls} from "../constants";

const coinsService = {
    getAll: () => apiService.get(urls.list)
}

export {
    coinsService
}