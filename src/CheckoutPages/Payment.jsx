// IMPORTING REACT AND CSS
import React, { useState } from "react";
import styles from './Payment.module.css';

// IMPORING PAYICONS
import checkpay from '../../images/checkoutPay.png'
import paytm from '../../images/paytm-icon-mobile.png'
import card from '../../images/card-cradit.png'
import upi from '../../images/upi.png'
import phonepe from '../../images/phonepe.png'
import amazonpay from '../../images/amazonpay.png'
import cod from '../../images/cod.png'

// IMPORT PAYIMAGES
import paytmI from '../../images/paytmI.jpg';
import phonepeI from '../../images/phonepeI.png';
import amazonI from '../../images/amazonI.png'
import UPII from '../../images/274966-upigpay.avif'
import visaI from '../../images/CardsI.jpg'
import CodI from '../../images/codI.jpg'


import Paymentbtn from "../Buttons/paymentbtn";

// PAYMENT COMPONENT
export default function Payment() {
    const[paymode,setpaymode] = useState('Pay With Paytm');
    const[payImg,setPayImg] = useState(paytmI);
    
    

    function setPaymetmore(mode){
        setpaymode(mode);
        if(mode === 'Pay With Paytm'){
            setPayImg(paytmI);
        }
        else if(mode === 'Phone Pe'){
            setPayImg(phonepeI);
        }
        else if(mode === 'Amazon Pay'){
            setPayImg(amazonI);
        }
        else if(mode === 'UPI'){
            setPayImg(UPII);
        }
        else if(mode === 'Debit/Credit Card'){
            setPayImg(visaI);
        }
        else if(mode === 'Cash On Delivery'){
            setPayImg(CodI);
        }
    }
    
    return (
        <div className={styles.payment}>
            {/* <p>This payment is the dummy page</p>
            <img src={checkpay} alt="" /> */}
            <h3 className={styles.heading}>CHOOSE PAYMENT METHOD</h3>
            <div className={styles.paymentcontainer}>
                <div className={styles.buttoncontainer}>
                    <Paymentbtn type={'Pay With Paytm'} logo={paytm} pay={[paymode,setPaymetmore]}/>
                    <Paymentbtn type={'Phone Pe'} logo={phonepe} pay={[paymode,setPaymetmore]}/>
                    <Paymentbtn type={'Amazon Pay'} logo={amazonpay} pay={[paymode,setPaymetmore]}/>
                    <Paymentbtn type={'UPI'} logo={upi} pay={[paymode,setPaymetmore]}/>
                    <Paymentbtn type={'Debit/Credit Card'} logo={card} pay={[paymode,setPaymetmore]}/>
                    <Paymentbtn type={'Cash On Delivery'} logo={cod} pay={[paymode,setPaymetmore]}/>
                </div>
                <div className={styles.selectedModecontainer}>
                    <img src={payImg} alt="" />
                </div>
            </div>
        </div>
    )
}