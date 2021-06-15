import React, { useEffect, useState } from 'react';
import '../../App.css';
import Item from '../Item';

export default function Songs(props) {
    const [data, setData] = useState([])

    const apiGet = () => {
        fetch("http://127.0.0.1:5000/api/songs")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setData(json);
            });
    };

    const theStyle = {
        "width": '25%',
        "margin-left": '25%', 
    }

    useEffect(() => {
        apiGet();
    }, []);
    return (
        <div style={theStyle}>
            <h1 className="songs">Songs</h1>
            {data.map((datum) => (
                <Item
                    id={datum.songid}
                    title={datum.songTitle}
                    artist={datum.artist}
                    lyrics={datum.lyrics}
                    path="/lyrics"
                />
            ))}
        </div>
    );
}