import React, { useState } from "react";
import University_registration from "./University_registration";

const NewUniversity = (props) =>{
    const saveUniDataHandler = (enteredUniData) =>{
        const uniData = {
            ...enteredUniData,
            id: Math.random().toString()
        };
        props.onAddUni(uniData);
    }
    return(
        <div>
            <University_registration onSaveUniData={saveUniDataHandler}/>
        </div>
    )
}
export default NewUniversity;