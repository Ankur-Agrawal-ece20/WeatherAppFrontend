import React,{useState,useEffect} from 'react'
import axios from "axios";

const CurrentWeather = () => {
    const [weatherData,setWeatherData]=useState([])

    // const options = {
    // method: 'GET',
    // url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    // params: {
    //     q: 'London,uk',
    //     lat: '0',
    //     lon: '0',
    //     // callback: 'test',
    //     id: '2172797',
    //     lang: 'null',
    //     units: 'imperial',
    //     mode: 'json'
    // },
    // headers: {
    //     'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    //     'x-rapidapi-key': '1c4d378973mshc5b9af24f6084b6p1be392jsn5387d813d986'
    // }
    // };

    // useEffect((options)=>{
    //     axios.request(options)
    //         .then(response => {
    //             let vari=response.data
    //             console.log(vari["coord"].lat);
    //             setWeatherData(vari);
    //         }).catch(function (error) {
    //             console.error(error);
    //     });
    // },[])

    useEffect(()=>{
        console.log("useEffect called");
        async function fetchData(){
            const options = {
                    method: 'GET',
                    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
                    params: {
                        q: 'London,uk',
                        lat: '0',
                        lon: '0',
                        // callback: 'test',
                        id: '2172797',
                        lang: 'null',
                        units: 'imperial',
                        mode: 'json'
                    },
                    headers: {
                        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                        'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
                    }
                };
            const request=await axios.request(options)
            console.log("Request=",request);
            setWeatherData(request.data)
            // return request
        }
        fetchData();
    },[])

    // let a=axios.request(options)
    //     .then(response => {
    //         return response.data
    //     }).catch(function (error) {
    //         console.error(error);
    // });

    // console.log("A=",a);

    // setWeatherData(a);
    
    console.log("Weather=",weatherData);
    
    return (
        <div>
            if(typeof weatherData !== 'undefined') ){
                <div>
                    <h1>Location: {weatherData["name"]}</h1>
                    <h2>Latitude: {weatherData["coord"].lat}</h2>
                    <h2>Longitude: {weatherData["coord"].lon}</h2>
                    <table>
                        <tr>
                            <th>Temperature</th>
                            <th>Minimum Temperature</th>
                            <th>Maximum Temperature</th>
                            <th>Humidity</th>
                            <th>Pressure</th>
                            <th>Wind Speed</th>
                        </tr>

                        <tr>
                            <td>{weatherData["main"].temp}</td>
                            <td>{weatherData["main"].temp_min}</td>
                            <td>{weatherData["main"].temp_max}</td>
                            <td>{weatherData["main"].humidity}</td>
                            <td>{weatherData["main"].pressure}</td>
                            <td>{weatherData["wind"].speed}</td>
                        </tr>
                    </table>
                </div>
            }
        </div>
    )
}

export default CurrentWeather
