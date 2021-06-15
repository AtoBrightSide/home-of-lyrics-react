import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

import './HeroSection.css';
import '../App.css';
import Button from './Button';
// import axios from 'axios';
import { useState } from 'react';


const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    }
}));

function HeroSection() {
    
    const mystyle = {
        "height": 50,
        "width": 300,
        "background": "rgba(255,255,255,0.08)",
        "border": "none",
        "font-size": 20,
    }
    const [keyword, setKeyword] = useState([]);

    return (
        <div className='hero-container'>
            <h1>HOME OF LYRICS</h1>
            <p></p>

            <div>
                {/* <form action='http://127.0.0.1:5000/api/search' method='GET' onSubmit={handleSubmit}> */}
                <SearchIcon styles={useStyles.searchIcon} />
                <input id='searchBox'  value={keyword}
                 onChange={(e)=>setKeyword(e.target.value)}
                  name='keyword' placeholder="Search songs, by title or artist.." type="text" style={mystyle} />
                <br />
                <Link to={'/results/' + keyword}>
                    {/* <Button type='submit' className='btns' buttonStyle='btn--outline' buttonSize='btn--large' style={useStyles.search}>
                        SEARCH
                    </Button> */}
                    <input type="submit" value="search" style={useStyles.search}/>
                </Link>

                {/* </form> */}
            </div>

        </div>
    )
}

export default HeroSection
