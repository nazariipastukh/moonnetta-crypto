import {apiService} from "./apiService";
import {urls} from "../constants";

const chartService = (id: string) => apiService.get(urls.chartData(id))

export {
    chartService
}