import React from "react";
export default function Coloricon({clr}){
    const iconstyle = {
        height : '30px',
        width : '30px',
        borderRadius : '50%',
        backgroundColor : `${clr}`,
        // border:'0.5px solid black'
    }
    const wb = {
        height : '30px',
        width : '30px',
        borderRadius : '50%',
        backgroundColor : `${clr}`,
        border:'0.5px solid black'
    }
    return (<div style={clr === 'white' ? wb : iconstyle}></div>)
}