import MainContainer from "./MainContainer";
import styles from './Error.module.css'
import { Link } from "react-router-dom";

export default function ErrorPage(){
    return (
    <>
    <MainContainer>
        <div className={styles.error}>
            <h1 className={styles.errorh}>404</h1>
            <p>OOPS! NOTHING WAS FOUND</p>
            <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
            <Link to={'/'}>Go Back To Home Page</Link>
        </div>
    </MainContainer>
    </>)
}