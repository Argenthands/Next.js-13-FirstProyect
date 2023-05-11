"use client"
import styles from "./Weather.module.scss"
import { useState, useEffect } from 'react';
//import { fetchWeather } from "../../api/api"
import { fetchWeather } from "../../api/api"

export default function Weather() {
    
    const [data, setData] = useState(null);
    const [city, setCity] = useState('jerusalem');
    useEffect(()=>{
        fetchWeather(city).then((data) => {
            setData(data);
        })
    }, [
        city
    ])

    return (
        <div className={styles.Weather}>
            <h1>Weather</h1>
            <label htmlFor="city">city: </label>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            {data ? (
                <div>
                    <h2>{data.nearest_area[0].areaName[0].value}</h2>
                    <h3>{data.current_condition[0].weatherDesc[0].value}</h3>
                    <p>{data.current_condition[0].temp_F}F</p>
                </div>
            ) :
            (
                <p>Loading...</p>
            )}
        </div>
    )
}