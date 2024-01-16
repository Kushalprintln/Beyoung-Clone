import React, { useEffect, useState } from "react";
import styles from './Filter.module.css'
import FilterBtn from "./FilterBtn";

export default function Filter({colors}){
    
    return(
        <div className={styles.filter}>
            <h3>FILTER</h3>
            <hr />
            <FilterBtn type={'color'} col={colors}/>
            <hr />
            <FilterBtn type={'size'}/>
            <hr />
            <FilterBtn type={'price'}/>
        </div>
    )
}