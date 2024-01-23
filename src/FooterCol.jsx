import React, { useEffect, useState } from "react";
import styles from './FooterCol.module.css';
export default function FooterCol({heading,list}){
    const [showlist , setShowList] = useState();
    function handleList(){
        if(window.innerWidth>900){
            setShowList(true);
        }else{
            setShowList(false);
        }
    }
    function reSize(){
        window.addEventListener('resize',handleList);
    }
    useEffect(()=>{
        handleList();
        reSize();
        return () => {
            window.removeEventListener('resize',handleWidth);
          };
    },[])
    return (
        <div className={styles.footerCol}>
            <h3 onClick={()=>{setShowList(prev=>!prev)}}>{heading}</h3>
            {showlist && <ul>
                {list.map((ele,idx)=>{
                    return <li key={idx}>{ele}</li>
                })}
            </ul>}
        </div>
    )
}