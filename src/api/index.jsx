import axios from 'axios';

export async function getWeatherData(
    endpoint,
    place_id,
    measurementSystem)
{


const options = {
  method: 'GET',
  url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
  params: {
    place_id,
    timezone: 'auto',
    language: 'en',
    units: measurementSystem
  },
  headers: {
    'x-rapidapi-key': '062da3e114msh5b25dae94c82e10p15e343jsne691f097a823',
    'x-rapidapi-host': 'ai-weather-by-meteosource.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	return response.data;
} catch (error) {
	console.error(error);
}
}