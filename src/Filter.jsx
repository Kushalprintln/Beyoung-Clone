import React, { useEffect, useState } from "react";
import styles from './Filter.module.css'
import FilterBtn from "./FilterBtn";

export default function Filter({scroll}){
    const [small,setSmall] = useState(false);
    function settingSize(){
        if(window.innerWidth < 720 ){
            setSmall(true);
        }else{
            setSmall(false);
        }
    }
    function resize(){
        window.addEventListener('resize',settingSize);
    }
    useEffect(()=>{
        settingSize();
        resize();
    },[])
    return(
        <div className={scroll ? styles.filterfix   : styles.filter}>
            {!small && <>
            <h3>FILTER</h3>
            <hr />
            </>}
            <FilterBtn type={'color'} />
            <hr />
            <FilterBtn type={'size'} />
            <hr />
            <FilterBtn type={'price'} />
        </div>
    )
}