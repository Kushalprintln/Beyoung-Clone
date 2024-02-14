// IMPORT REACT HOOKS AND STYLES
import React, { useEffect, useState } from "react";
import styles from './Filter.module.css'

// IMPORTING OHTER COMPONENTS
import FilterBtn from "../Buttons/FilterBtn";

// FILTER COMPONENT
export default function Filter() {
    // CHEKING DEVICE WIDTH
    const [small, setSmall] = useState(false);
    function settingSize() {
        if (window.innerWidth < 720) {
            setSmall(true);
        } else {
            setSmall(false);
        }
    }

    // RESIZING FOR RESPONSIVNESS
    function resize() {
        window.addEventListener('resize', settingSize);
    }

    // USEEFFECT
    useEffect(() => {
        settingSize();
        resize();
    }, [])

    return (
        <div className={styles.filtercontainer}>
            <div className={styles.filter}>
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
        </div>

    )
}