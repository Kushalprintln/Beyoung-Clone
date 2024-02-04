// IMPORT REACT AND ROUTER HOOK
import React from "react";
import { Link } from "react-router-dom";

// IMPORT HOMEBTN
export default function Homebtn({ text }) {
    const stylebtn = {
        background: '#feeb00',
        color: '#000',
        border: 'none',
        borderRadius: '8px',
        padding: '12px 20px',
        textTransform: 'uppercase',
        fontSize: '15px',
        width: '50%',
        margin: '10px auto',
        textAlign: 'center',
        display: 'block',
        cursor: 'pointer'
    }
    return (
        <Link to={'/'} style={{ textDecoration: 'none' }}><button style={stylebtn}>{text}</button></Link>
    )
}