import React from 'react';
import SignupLeft from '../../Component/SignUp/signUpLeft';
import SignupRight from '../../Component/SignUp/signUpRight';
import styles from './SignUpPage.module.css';

function SignupPage() {
    return (
        <div className = {styles.grid_items}> 
            <SignupLeft />
            <SignupRight />
        </div>
    )
}

export default SignupPage;
