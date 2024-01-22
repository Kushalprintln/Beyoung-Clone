import React, { useRef } from "react";
import styles from './CardCarousal.module.css';
import { FaChevronLeft,FaChevronRight  } from "react-icons/fa";
import Card from "./Card";
export default function CardCarousal({data}){
    const left = useRef();
    const right = useRef();
    const slidcontainer = useRef();
    console.log(left)
    console.log(right);
    console.log(slidcontainer)
    function scrollL(){
        slidcontainer.current.scrollLeft -= 300;
    }
    function scrollR(){
        slidcontainer.current.scrollLeft += 300;
    }
    return (
        <div className={styles.carousal}>
            <div className={styles.btndivleft}>
                <button className={styles.leftbtn} ref={left} onClick={scrollL}>
                <FaChevronLeft size={'2em'} style={{background:'white', padding:'2px', boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"} }/>
                </button>
            </div>
            <div className={styles.carousalContainer} ref={slidcontainer}>
                <div className={styles.innerContainer} >
                    {/* <Card /> */}
                    {data && data.map((ele,idx)=>{
                        return <Card key={idx} br={true} data = {ele}/>
                    })}
                </div>
            </div>
            <div className={styles.btndivright}>
                <button className={styles.rightbtn} ref={right} onClick={scrollR}>
                <FaChevronRight size={'2em'} style={{background:'white', padding:'2px',boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"} } />
                </button>
            </div>
        </div>
    )
}