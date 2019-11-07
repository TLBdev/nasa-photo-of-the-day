import React from "react";
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: rgba(0,0,0,.8);
    width: 50%;
    padding: 3%;
    margin: 3%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            color: #32CD32; 
            padding: 2%; 
            padding-top: 0%;
            text-align: start;
            font-size: 2rem;
        }
        img{
            width: 90%
        }
    }
    
`
const StyledH1 = styled.h1`
    color: #32CD32;
    padding 7%;
    font-size: 4rem;
    text-align: center
`
export default function PhotoCard(props){
    return(
        <StyledDiv>
            <StyledH1>{props.data.title}</StyledH1>
            <div><img src = {props.data.hdurl}/></div>
            <div className='desc'><p>{props.data.explanation}</p></div>

        </StyledDiv>
    )
}