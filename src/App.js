import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './Pages/SignUpPage/SignUpPage';
import './App.css';


function App() {
    return (
      <Router>
        <div>
          <Routes>
           <Route path ='/' element = {<SignupPage />}></Route>
          </Routes>
        </div>
      </Router>   
    );
} 
  
export default App;



