import axios from 'axios'

export default class AxiosService {
    async getWeather(city) {
        const response = await axios.get('https://goweather.herokuapp.com/weather/' + city);
        return response;
    }
}