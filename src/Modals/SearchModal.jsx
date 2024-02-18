// IMPORTING REACT AND CSS
import React, { useState } from "react";
import styles from './SearchModal.module.css';
import { useNavigate } from "react-router-dom";

// SEARCH MODAL COMPONENT
export default function SearchModal() {

    const navigate = useNavigate();

    const [searchItem,setSearchItem] = useState('');

    function handleInput(e){
        setSearchItem(e.target.value);
    }

    function handleSearch(){
        if(searchItem !== ''){
            navigate('/search/som');
        }
    }

    return (
        <div className={styles.searchmodal}>
            <input type="text" value={searchItem} onChange={handleInput} className={styles.searchinput} placeholder="Search entire store here..." />
            <button className={styles.searchbtn}>Search</button>
        </div>
    )
}