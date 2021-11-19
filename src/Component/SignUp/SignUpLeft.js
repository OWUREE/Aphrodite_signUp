import React from 'react';
import Logo from '../../Assets/Logo1-min.png';
import './SignUp.css';


function SignupLeft() {
    return (
        <div className='Couple_image'>
            <div>
                    <img className="logo_img" src={Logo} alt="Aphrodite logo"/>
            </div>
            <div className = 'Couple_content'>
               <h2>
                 Get to see thousand of people based on your <br/>
                 preference anywhere and anytime on <span className = "span"> Aphrodite </span>
               </h2>
               <p>
                 Already have an account? <span className = "span"> Sign in </span>
               </p>
            </div>
            
        </div>
    )
}

export default SignupLeft;