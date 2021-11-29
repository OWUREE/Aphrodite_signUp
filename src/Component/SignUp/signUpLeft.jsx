import React from 'react';
import Logo from '../../Assets/Logo1-min.png';
import styles from './signUp.module.css';


function SignupLeft() {
    return (
        <div className={styles.Couple_image}>
            <div>
                    <img className={styles.logo_img} src={Logo} alt="Aphrodite logo"/>
            </div>
            <div className = {styles.Couple_content}>
              <h1 className = {styles.h1}> Say no to loneliness </h1>
               <h2>
                 Get to see thousand of people based on your <br/>
                 preference anywhere and anytime on <span className = {styles.span}> Aphrodite </span>
               </h2>
               <p className = {styles.p}>
                 Already have an account? <span className = {styles.span}> Sign in </span>
               </p>
            </div>
            
        </div>
    )
}

export default SignupLeft;