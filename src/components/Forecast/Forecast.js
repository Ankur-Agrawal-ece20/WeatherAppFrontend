import React,{useState,useEffect} from 'react'
import axios from "axios";

const Forecast = () => {
    const [forecast,setForecast]=useState([])

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
    //             setforecast(vari);
    //         }).catch(function (error) {
    //             console.error(error);
    //     });
    // },[])

    useEffect(()=>{
        console.log("useEffect called");
        async function fetchData(){
            const options = {
                    method: 'GET',
                    url: 'https://forecast9.p.rapidapi.com/rapidapi/forecast/Berlin/summary/',
                    headers: {
                        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
                        'x-rapidapi-key': '47cd745e3amshab32e2942dd9b87p1e6fa4jsn14c37e1f98f1'
                    }
                };
            const request=await axios.request(options)
            console.log("Request=",request);
            setForecast(request.data)
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

    // setforecast(a);
    
    console.log("Weather=",setForecast);

    return (
        <div>
            if(typeof forecast !== 'undefined') ){
                <div>
                    <h1>Location: {forecast["location"].name}</h1>
                    <h2>Latitude: {forecast["location"].ccoordinates.latitude}</h2>
                    <h2>Longitude: {forecast["location"].longitude}</h2>
                    <table>
                        <tr>
                            <th>Minimum Temperature</th>
                            <th>Maximum Temperature</th>
                            <th>Min Wind Speed</th>
                            <th>MAx Wind Speed</th>
                        </tr>

                        <tr>
                            <td>{forecast["forecast"].forecast.items[0].temperature.min}</td>
                            <td>{forecast["forecast"].forecast.items[0].temperature.max}</td>
                            <td>{forecast["forecast"].forecast.items[0].wind.min}</td>
                            <td>{forecast["forecast"].forecast.items[0].wind.max}</td>
                        </tr>
                    </table>
                </div>
            }
        </div>
    )
}

export default Forecast
