import React from 'react';
import '../App.css'

const filter = (props) => {
        return(
            <div className="filter">
                <ul>
                    <li onClick={props.ClickFilter}><a>{props.filter}</a></li>
                </ul>
            </div>
        );
    }
export default filter;