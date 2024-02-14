// IMPORTING REACT HOOKS AND STYLES
import React, { useContext, useState } from "react";
import styles from './FilterBtn.module.css';

// IMPORTING ICON AND OHTER COMPONENTS
import { FaChevronDown } from "react-icons/fa";
import Coloricon from "./Coloricon";
import ProductContext from "../Contexts/ProductContext";
import SizeSelectBtn from "./SizeFilterBtn";

// FILTERBTN COMPONENT
export default function FilterBtn({ type }) {
    // INITILIZING PRODUCT CONTEXT;
    const Pro = useContext(ProductContext);

    // SETTING SHOW FILTER FOR SLIDING DOWN;
    const [showfilter, setShowfilter] = useState(true);

    // SETTING SORT ALSO IN PRODUCT CONTEXT
    function handleSort(event) {
        Pro.sortAlogSelection[1](event.target.value);
    }

    // FILTER FOR COLOR
    if (type === 'color') {
        return (
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={() => { setShowfilter(prev => !prev) }} ><span>COLOR</span><span><FaChevronDown size={'1.3em'} color="#000" style={{ cursor: 'pointer' }} /></span></div>
                {showfilter && <div className={styles.colfilter}>
                    {Pro.colors.map((ele, idx) => {
                        return <Coloricon key={idx} clr={ele} />
                    })}
                </div>}
            </div>
        )
    } else if (type === 'size') {
        // FILTER FOR SIZE 
        return (
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={() => { setShowfilter(prev => !prev) }} ><span>SIZE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{ cursor: 'pointer' }} /></span></div>
                {showfilter && <div className={styles.sizefilter}>
                    <SizeSelectBtn size={'S'} />
                    <SizeSelectBtn size={'M'} />
                    <SizeSelectBtn size={'L'} />
                    <SizeSelectBtn size={'XL'} />
                    <SizeSelectBtn size={'XXL'} />
                </div>}
            </div>
        )
    } else if (type === 'price') {
        // FILTER FOR PRICE SORTING
        return (
            <div className={styles.filterbtn} >
                <div className={styles.filheading} onClick={() => { setShowfilter(prev => !prev) }} ><span>PRICE</span><span><FaChevronDown size={'1.3em'} color="#000" style={{ cursor: 'pointer' }} /></span></div>
                {showfilter && <div className={styles.pricefilter}>
                    <span><input type="radio" name="sort" id="HTL" value={'ASD'} onChange={handleSort} checked={Pro.sortAlogSelection[0] === 'ASD'} /><label htmlFor="HTL">Price : Low-High</label></span>
                    <span><input type="radio" name="sort" id="LTH" value={'DES'} onChange={handleSort} checked={Pro.sortAlogSelection[0] === 'DES'} /><label htmlFor="LTH">Price : High-Low</label> </span>
                </div>}
            </div>
        )
    }
}