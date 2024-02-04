//  IMPORT REACT AND STYLES
import React from "react";
import styles from './LogoCarousel.module.css'

// IMPORTING IMAGES
import logo1 from '../images/logo1.png'
import logo2 from '../images/logo2.png'
import logo3 from '../images/logo3.png'
import logo4 from '../images/logo4.png'
import logo5 from '../images/logo5.png'

// IMPORTING LOGOCAROUSEL
export default function LogoCarousel() {
    const logos = [logo1, logo2, logo3, logo4, logo5];
    return (
        <div className={styles.logoCarousel}>
            <div className={styles.logoheading}>
                <div className={styles.line}><hr /></div>
                <div className={styles.featured}>FEATURED ON</div>
                <div className={styles.line}><hr /></div>
            </div>
            <div className={styles.slider}>
                <div className={styles.slidercontainer}>
                    {logos.map((ele, idx) => {
                        return <img src={ele} alt="" key={idx} />
                    })}
                </div>
                <div className={styles.slidercontainer}>
                    {logos.map((ele, idx) => {
                        return <img src={ele} alt="" key={idx} />
                    })}
                </div>
            </div>
        </div>
    )

}