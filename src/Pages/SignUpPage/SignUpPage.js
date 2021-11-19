import React from 'react';
import SignupLeft from '../../Component/SignUp/SignUpLeft';
import SignupRight from '../../Component/SignUp/SignUpRight';
import './SignUpPage.css';

function SignupPage() {
    return (
        <div className = "grid-items"> 
            <SignupLeft />
            <SignupRight />
        </div>
    )
}

export default SignupPage;
