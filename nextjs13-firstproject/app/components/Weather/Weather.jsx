"use client"

import { useState, useEffect } from 'react';
import { fetchWeather } from "../../api/api"

export default function Weather() {
    
    const [data, setData] = useState(null);
    useEffect(()=>{
        fetchWeather('New York').then((data) => {
            setData(data);
        })
    }, [])

    return (
        <div>
            <h1>Weather</h1>
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