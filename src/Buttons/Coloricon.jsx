// IMPORTING REACT HOOKS AND CSS;
import React, { useContext } from "react";
// IMPORTING PRODUCT CONTEXT;
import ProductContext from "../Contexts/ProductContext";

// COLORICON COMPONENT
export default function Coloricon({ clr }) {
    // INITILIZING PRODUCT CONTEXT
    const Pro = useContext(ProductContext);

    let title = clr.toUpperCase();
    if (clr === 'cream') {
        clr = '#FFF39A';
        title = 'CREAM';
    }
    else if (clr === 'multicolor') {
        clr = `linear-gradient(
            90deg,
            rgba(255, 0, 0, 1) 0%,
            rgba(255, 154, 0, 1) 10%,
            rgba(208, 222, 33, 1) 20%,
            rgba(79, 220, 74, 1) 30%,
            rgba(63, 218, 216, 1) 40%,
            rgba(47, 201, 226, 1) 50%,
            rgba(28, 127, 238, 1) 60%,
            rgba(95, 21, 242, 1) 70%,
            rgba(186, 12, 248, 1) 80%,
            rgba(251, 7, 217, 1) 90%,
            rgba(255, 0, 0, 1) 100%
        )`
        title = 'MULTICOLOR'
    }

    // INLINE STYLES OF ICON
    const iconstyle = {
        height: '30px',
        width: '30px',
        borderRadius: '50%',
        background: `${clr}`,
        border: `${clr === 'white' ? Pro.colorSelection[0] === title ? 3 : 1 : Pro.colorSelection[0] === title ? 3 : 0}px solid ${clr === 'black' ? 'yellow' : 'black'}`
    }

    // SELECT FUNCTION FOR SELECTION ICON
    function selectingColor() {
        Pro.colorSelection[0] === `${title}` ? Pro.colorSelection[1]('') : Pro.colorSelection[1](title);
    }
    return (<div style={iconstyle} title={`${title}`} onClick={selectingColor}></div>)
} 