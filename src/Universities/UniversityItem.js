import React, { useState } from 'react';
import './UniversityItem.css';
// import Card from '../UI/Card';
import Offers from './Offers';

function UniversityItem(props) {

    return (
            <a href="universitet" class="university">
                <img src={props.image} alt="" />
                <h6>{props.name}</h6>
                <Offers />
            </a>
    );
}
export default UniversityItem;