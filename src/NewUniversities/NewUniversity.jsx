// import React, { useState } from "react";
import University_registration from "./University_registration.jsx";

const NewUniversity = (props) =>{
    const saveUniDataHandler = (enteredUniData) =>{
        const uniData = {
            id: Math.random().toString(),
            ...enteredUniData
        };
        props.onAddUni(uniData);
    }
    return(
        <div>
            <University_registration onAdd={saveUniDataHandler} /> 
            {/* onSaveUniData={saveUniDataHandler} */}
        </div>
    )
}
export default NewUniversity;