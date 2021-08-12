import React from 'react';
import Header from '../LandingPage/Header';
import About from '../LandingPage/About';
import Partner from '../LandingPage/Partner';
import Feature from '../LandingPage/Feature';
import Review from '../LandingPage/Review';
import Footer from '../LandingPage/Footer';
import '../../style/landingPage.css'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const LandingPage = () => {
    const user = useSelector(state => state.user)

    if(user.userId){
        return <Redirect to="/dashboard"/>
    }
    return (
        <div>
            <Header/>
            <About/>
            <Partner/>
            <Feature/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default LandingPage

