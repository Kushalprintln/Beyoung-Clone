import styles from './PaymentSlider.module.css';
import pay1 from '../images/payment1.jpg'
import pay2 from '../images/payment2.jpg'
import pay3 from '../images/payment3.jpg'
import pay4 from '../images/payment4.jpg'
import pay5 from '../images/payment5.jpg'
import pay6 from '../images/payment6.jpg'
import pay7 from '../images/payment7.jpg'
export default function Paymentslider(){
    const images = [pay1,pay2,pay3,pay4,pay5,pay6,pay7];
    const p1 = 0; 
    const p2 = 1;
    
    return (
        <div className={styles.slider}>
            <div className={styles.slidercontainer} >
                <img src={pay1} alt="" />
                <img src={pay2} alt="" />
                <img src={pay3} alt="" />
                <img src={pay4} alt="" />
                <img src={pay5} alt="" />
                <img src={pay6} alt="" />
                <img src={pay7} alt="" />
            </div>
        </div>
    )
}