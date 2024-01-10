import React from "react";
import styles from './Footer.module.css';
import FooterCol from "./FooterCol";
import paymentimg from '../images/Frame-payment -1.jpg'
import { FaInstagram,FaLinkedin,FaFacebook,FaTwitter,FaPinterest,FaYoutube    } from "react-icons/fa";
import FqAsk from "./FqAsk";
export default function Footer(){
    return (
        <div className={styles.footer}>
            <div className={styles.footerContainer}>
                <FooterCol heading={'need help'} list={['contact us','track order','returns & refund', "FAQ's",'career']}/>
                <FooterCol heading={'company'} list={['about us','beyoung blog','beyoungistan','collabration','media']}/>
                <FooterCol heading={'more info'} list={['terms and condition','privacy policy','shipping policy','sitemap']}/>
                <FooterCol heading={'location'} list={['supoort@beyoung.in','Eklingpura Chouraha, Ahmedabad Main Road','(NH 8- Near Mahadev Hotel) Udaipur, India- 313002']}/>
            </div>
            <hr />
            <FqAsk heading={'why chose us?'} pheading={'Online Shopping Site'} pcontent={"India's Best Online Shopping Site for Fashion and Lifestyle Started in 2018, Beyoung is the Best Site for online shopping in India when it comes to a vast collection of men's and women's fashion. The latest trends and styles are showcased here, yes at your favorite online fashion store. Well, if fashion is medicine, then Be Young is the chemist shop where you can do your online shopping for fashion with ease. Nothing to brag about, but we are the classic blend of 'Creativity' and 'Style'. Get The Young Out with Beyoung, our slogan says a lot about us. Our website is filled with the cool outfits that you always crave. Indeed, online shopping for women and men at Beyoung is hassle-free that in just a few clicks, one can purchase whatever he/she wants. A one-stop destination for all your shopping needs, Beyoung caters to each taste and need of every personality. The premium quality, affordable style, and trending graphics go into the making of our vast collection of men's and Women's Clothing. So, go ahead and indulge with India's best online shopping website for fashion. To know more about us, scroll below!"}/>
            <hr />
            <FqAsk heading={'popular categories'} pheading={"MEN'S CLOTHING"} pcontent={"Topwear: Half Sleeve T-Shirts | Full Sleeve T-Shirts | Men's Shirts | Printed T-Shirts | Plain T-Shirts | Polo T-Shirts | Plus Size T-Shirts | Combos Theme Based T Shirts: Ipl T Shirts | Men's Travel T-shirts | Gym T Shirts | Quotes T Shirt | Cartoon T Shirt | Entrepreneur T-Shirts | Student T Shirts | Funky T Shirts Winter Collection: Hoodies for Men | Sweatshirts for Men | Jackets for Men"}/>
            <hr />
            <div className={styles.footerContainer2}>
                <div className={styles.left}>
                    <h3>100% Secure Payment</h3>
                    <img src={paymentimg} alt="" />
                </div>
                <div className={styles.right}>
                    <h3>Let's Be Friends</h3>
                    <div className={styles.logos}>
                        <FaInstagram size={'2em'} />
                        <FaLinkedin size={'2em'} />
                        <FaFacebook size={'2em'} />
                        <FaTwitter size={'2em'} />
                        <FaPinterest size={'2em'} />
                        <FaYoutube size={'2em'} />
                    </div>
                </div>
            </div>
            <p>Copyright © 2023 Beyoung Folks Pvt Ltd. All rights reserved.</p>
        </div>
    )
}