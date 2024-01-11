import React from "react";
export default function Coloricon({clr}){
    const iconstyle = {
        height : '30px',
        width : '30px',
        borderRadius : '50%',
        backgroundColor : `${clr}`
    }
    return (<div style={iconstyle}></div>)
}