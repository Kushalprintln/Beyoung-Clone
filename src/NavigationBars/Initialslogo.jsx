import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../Contexts/AuthContext";
export default function Initialslogo(){
    const Authentication = useContext(AuthContext);

    // STATE FOR NAMEINITIALS FOR THE PROFILE CIRCLE
    const [namein,setNamein] = useState('');
    const css = { 
        fontSize: '50px', 
        margin: 'auto', 
        width: '100px', 
        height: '100px', 
        borderRadius: '50%', 
        background: '#141414', 
        color: '#fff', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textTransform: 'uppercase' 
    };

    //SETTING NAME INITIALS
    function name(){
        // Authentication.
        if(Authentication.data[0].name.includes(' ')){
            let Name = Authentication.data[0].name.split(' ');
            let initials = `${Name[0].charAt(0)}${Name[1].charAt(0)}`
            setNamein(initials);
        }else{
            let name = Authentication.data[0].name;
            let initials = `${name.charAt(0)}${name.charAt(1)}`
            setNamein(initials);
        }
    }

    //  SETTING INITIAL ONLY WHEN LOGGINED OTHER WISE ERROR IN READING SPLIT METHOD
    useEffect(()=>{
        if(Authentication.status[0]){
            name();
        }
    },[Authentication.status[0]])

    return (<span style={css}>{namein}</span>)
}