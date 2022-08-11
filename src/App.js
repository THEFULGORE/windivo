import './App.css';
import { useEffect, useState } from 'react';
import ContentInfo from './Components/ContentInfo/ContentInfo';
import Sidebar from './Components/Sidebar/Sidebar';
import { getUserLocation, weatherAPI } from './Api/api.js';
import { changeBackground } from './utils/BackgroundChange.js';

function App() {
	const [location, setLocation] = useState();
	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState([]);

	useEffect(() => {
		getUserLocation().then((res) => {
			setLocation(res);
		});
	}, []);

	useEffect(() => {
		if (location) {
			weatherAPI.getCurData(location.lat, location.lon).then((res) => {
				setWeather(res);
				console.log(res.data.weather[0].id);
				changeBackground(res.data.weather[0].id);
			});
			weatherAPI.getForecast(location.lat, location.lon).then((res) => {
				setForecast(res);
			});
		}
	}, [location]);

	return (
		<div className="App">
			<div className="app-wrapper">
				<Sidebar location={location} data={weather.data} />
				<ContentInfo setLocation={setLocation} data={weather.data} forecast={forecast} />
			</div>
		</div>
	);
}

export default App;
