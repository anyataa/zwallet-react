import React from 'react';
import "../../../style/landingPage.css";
import Review1 from "../../../asset/SVG/review-1.svg"
import Review2 from "../../../asset/SVG/review-2.svg"
import Review3 from "../../../asset/SVG/review-3.svg"

const Review = () => {
    return (
        <div className="landing-review">
            <div className="landing-about-top">
                <p className="about-title"><span>What Users are </span>Saying.</p>
                <p className="about-subtitle">We have some great features from the application and it’s totally free to use
                    by all users around the world.</p>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <img src={Review1} alt="Review1" />
                    <p className="card-title-about">Sherina Chaw</p>
                    <p className="card-desc-about">“I use this app since 2 years ago and this is the best app that I’ve
                        ever use in my entire life”</p>
                </div>
                <div className="card">
                    <img src={Review2} alt="Review2" />
                    <p className="card-title-about">Jessica Mera</p>
                    <p className="card-desc-about">“I use Zwallet to manage all financial needs. It’s super easy to use
                        and it’s 100% free app”</p>
                </div>
                <div className="card">
                    <img src={Review3} alt="Review3" />
                    <p className="card-title-about">Robert Chandler</p>
                    <p className="card-desc-about">“Since I’m using this app, I’m not going to move to another similar
                        app. Thank you Zwallet!”</p>
                </div>
            </div>
        </div>
    )
}

export default Review
