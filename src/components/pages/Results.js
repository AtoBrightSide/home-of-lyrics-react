import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item'

function Results() {
    const { keyword } = useParams();
    const [data, setData] = useState([]);
    const handleSubmit = () => {
        axios.get('http://127.0.0.1:5000/api/search/' + keyword)
            .then(response => {
                console.log("this is response: ", response);
                setData(response.data);
            })
            .catch(error => {
                console.log("this is error: " + error)
            })
    }
    useEffect(() => {
        handleSubmit();
    }, []);
    console.log(data);
    return (
        <>
            <h1>Search Results</h1>
            {data.length > 1 && (
                data.map(i => {
                    return (
                        <Item
                            id={i.songid}
                            title={i.songTitle}
                            artist={i.artist}
                            lyrics={i.lyrics}
                            path="/lyrics"
                        />
                    )
                })
            )}
            {console.log(typeof(data) )}
            {typeof(data) ==='object' && (
                <Item
                id={data.songid}
                title={data.songTitle}
                artist={data.artist}
                lyrics={data.lyrics}
                path="/lyrics"
            />
            )}

        </>
    )
}

export default Results
