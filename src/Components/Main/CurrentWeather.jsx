
import { getCurrentWeather } from "../../api/index.jsx";

const CurrentWeather = () => {
  try {
    const data =getCurrentWeather();
    console.log(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
  }


  return <div className="CurrentWeather" />;
};

export default CurrentWeather;

// import { useEffect, useState } from "react";
// import { getCurrentWeather } from "../../api";

// const CurrentWeather = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const result = await getCurrentWeather();
//         console.log(result);
//         setData(result);
//       } catch (error) {
//         console.error("Error fetching weather:", error);
//       }
//     };

//     fetchWeather();
//   }, []);

//   // return <div className="CurrentWeather" />;
//   <div className="CurrentWeather">
//   {data ? (
//     <>
//       <h2>Current Weather</h2>
//       <p>Temperature: {data.temp}°C</p>
//       <p>Condition: {data.condition}</p>
//     </>
//   ) : (
//     <p>Loading...</p>
//   )}
// </div>
// }

// export default CurrentWeather;