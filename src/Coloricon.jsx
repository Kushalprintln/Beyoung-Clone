import React, { useState } from "react";
export default function Coloricon({clr,selCols,setCols}){
    const [border,setborder]= useState(0);
    const iconstyle = {
        height : '30px',
        width : '30px',
        borderRadius : '50%',
        backgroundColor : `${clr}`,
        border:`${border}px solid black`
    }
    return (<div style={iconstyle}></div>)
} 