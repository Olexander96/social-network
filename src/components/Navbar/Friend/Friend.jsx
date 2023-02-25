import React from 'react';
import f from './Friend.module.css';


const Friend = (props) => {
    const alt = props.name + " avatar";
    
    return (
        <li className={ f.item }>
            <img src={ props.avatar } alt={ alt } />
            <span> { props.name } </span>
        </li>
    )
}

export default Friend;