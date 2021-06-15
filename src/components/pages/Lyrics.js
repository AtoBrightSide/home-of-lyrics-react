import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

export default function Lyrics() {
    let { id } = useParams();

    const [data, setData] = useState([])

    const apiGet = () => {
        fetch("http://127.0.0.1:5000/api/songs/"+id)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    };

    useEffect(() => {
        apiGet();
    });
    
    const theStyle = {
        "width": '25%',
        "margin-left": '25%', 
    }

    return (
        <div style={theStyle}>  
            <h1>{data.songTitle}</h1>
            <h2>{data.artist}</h2>
            <p>{data.lyrics}</p>
        </div>
    )
}