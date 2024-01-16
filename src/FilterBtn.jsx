import React, { useContext, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from './FilterBtn.module.css';
import Coloricon from "./Coloricon";
import ProductContext from "./ProductContext";
export default function FilterBtn({type}){
    const [showfilter, setShowfilter] = useState(false);
    const Pro = useContext(ProductContext);
    function handleSort(event){
        Pro.sortAlgoFun(event.target.value);
    }

    if(type ==='color'){
        return(
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={()=>{setShowfilter(prev=>!prev)}} ><span>COLOR</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.colfilter}>
                    {Pro.colors.map((ele,idx)=>{
                        return <Coloricon key={idx} clr={ele} />
                    })}
                </div>}
            </div>
        )
    }else if(type === 'size'){
        return(
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={()=>{setShowfilter(prev=>!prev)}} ><span>SIZE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.sizefilter}>
                    <span>S</span>
                    <span>M</span>
                    <span>L</span>
                    <span>XL</span>
                    <span>XXL</span>
                </div>}
            </div>
        )
    }else if(type === 'price'){
        return(
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={()=>{setShowfilter(prev=>!prev)}} ><span>PRICE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{cursor:'pointer'}}/></span></div>
                {showfilter && <div className={styles.pricefilter}>
                    <span><input type="radio" name="sort" id="HTL" value={'ASD'} onChange={handleSort}/><label htmlFor="HTL">Price : Low-High</label></span>
                    <span><input type="radio" name="sort" id="LTH" value={'DES'} onChange={handleSort}/><label htmlFor="LTH">Price : High-Low</label> </span>
                </div>}
            </div>
        )
    }
}