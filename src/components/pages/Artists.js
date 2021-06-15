import React, { useEffect, useState } from 'react';
import '../../App.css';

export default function Artists() {
    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch("http://127.0.0.1:5000/api/artists")
            .then((response) => response.json())
            .then((json) => {
                console.log(json['All Artists']);
                setData(json['All Artists']);
            });
    };
    console.log(data);

    useEffect(() => {
        apiGet();
    }, []);

    const theStyle = {
        "width": '25%',
        "margin-left": '25%', 
        "font-size": 25
    }

    return (
        <div style={theStyle}>
            <h1 className="artists">Artists</h1>
            <ul>

                {data.map((datum) => (
                    <li>{datum}</li>
                ))}

            </ul>
        </div>
    );
}