import React from 'react'
import { Link } from 'react-router-dom'

import './Item.css'

function Item(props) {
    return (
        <div className="task">
           <Link to={"/lyrics/" + props.id}>
                <div>
                    {props.title} by {props.artist}
                </div>
           </Link> 
        </div>
    )
}

export default Item
