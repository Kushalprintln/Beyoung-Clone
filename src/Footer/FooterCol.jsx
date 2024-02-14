// IMPORTING REACT HOOKS AND CSS;
import React, { useEffect, useState } from "react";
import styles from './FooterCol.module.css';

// FOOTER COLOM COMPONENT
export default function FooterCol({ heading, list }) {
    // STATE FOR SHOW LIST IN PHOME MODE
    const [showlist, setShowList] = useState();
    function handleList() {
        if (window.innerWidth > 900) {
            setShowList(true);
        } else {
            setShowList(false);
        }
    }
    // RESIZE FUNCTION FOR RESPONSIVENESS
    function reSize() {
        window.addEventListener('resize', handleList);
    }
    //  USEEFFECT; 
    useEffect(() => {
        handleList();
        reSize();
        return () => {
            window.removeEventListener('resize', handleList);
        };
    }, [])

    return (
        <div className={styles.footerCol}>
            <h3 onClick={() => { setShowList(prev => !prev) }}>{heading}</h3>
            {showlist && <ul>
                {list.map((ele, idx) => {
                    return <li key={idx}>{ele}</li>
                })}
            </ul>}
        </div>
    )
}