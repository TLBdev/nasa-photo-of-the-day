import React, { useState, useEffect } from "react";


export default function PhotoCard(props){
    return(
        <div>
            <h1>{props.data.title}</h1>
            <div><img src = {props.data.hdurl}/></div>
            <div className='desc'><p>{props.data.explanation}</p></div>

        </div>
    )
}