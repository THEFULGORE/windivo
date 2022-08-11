import * as axios from 'axios';

const GEO_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const FORECAST_API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const API_KEY = '475ca6298496a76bc72f04973786fb0a';

export const geoAPI = {
	getLocByName(input) {
		return axios.get(`${GEO_API_URL}?q=${input}&limit=5&appid=${API_KEY}`).then((res) => {
			let arr = res.data.map((el, index) => {
				return {
					key: index,
					value: el.name,
					country: el.country,
					lat: el.lat,
					lon: el.lon,
				};
			});
			return arr;
		});
	},
};

export const weatherAPI = {
	getCurData(lat, lon) {
		return axios
			.get(`${WEATHER_API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
			.then((response) => {
				return response;
			});
	},
	getForecast(lat, lon) {
		return axios
			.get(`${FORECAST_API_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
			.then((response) => {
				let array = response.data.list.map((el) => {
					return {
						date: el.dt_txt,
						temperature: el.main.temp,
					};
				});
				return array;
			});
	},
};

export const getUserLocation = async () => {
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});

	return {
		lat: pos.coords.latitude,
		lon: pos.coords.longitude,
	};
};
