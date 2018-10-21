import React from "react";
import Helmet from "react-helmet";

import Layout from '../components/layout';

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "Gatsby Starter - Photon";

        return (
            <Layout>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Safe<br />
                                </h2>
                            </header>
                            <p>Your payments are secured by advanced technology.</p>
                            <p>Face and voice recognition keep your information secure.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src="https://i.imgur.com/ytxBg3z.jpg" alt="" /></span>
                        </div>
                    </div>
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <span className="image fit"><img src="https://i.imgur.com/yo1ASLB.jpg" alt="" /></span>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Convenient<br />
                                </h2>
                            </header>
                            <p>Pay all your bills at a single place, with the option of doing it cashless.</p>
                            <p>Get coupons from your favorite merchants</p>
                            <p>Gain access to our emergency loan program</p>

                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><span className="icon major"><img src="https://i.imgur.com/t2nz6oG.png" alt="" /></span></li>
                                <li><span className="icon style2"><img src="https://i.imgur.com/rYtCG8d.png" alt="" /></span></li>
                                <li><span className="icon style3 major"><img src="https://i.imgur.com/zA85ax7.png" alt="" /></span></li>
                                <li><span className="icon style4 major"><img src="https://i.imgur.com/5hPHGEe.png" alt="" /></span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>Rewards for Merchant Ambassadors<br />
                                </h2>
                            </header>
                            <p>The more payments you help process on EasyPay the more you bennefit yourself and your community</p>
                            <p>Gain access to free business coaching to make more business and take care of more customers</p>
                            <p>Get access to better financial products exclusive to merchants ambassadors</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>Rewards that help your community</h2>
                            </header>
                            <p>The more payments you make or help process the more your community grows</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src="https://i.imgur.com/yYvaFdP.jpg" alt="" /></span>
                            <h3>Payments is only the beginning</h3>
                            <p>Your payment records from EasyPay are the easiest way to show that you are a responsible, creditworthy person.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src="https://i.imgur.com/LHnqDHD.jpg" alt="" /></span>
                            <h3>We are your financial advisors</h3>
                            <p>We are available to you 24/7 if you need advice or have a financial emergency.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src="https://i.imgur.com/2rIVbCq.jpg" alt="" /></span>
                            <h3>Financial Education</h3>
                            <p>We will send you monthly booklets to show you more about the power of saving and making credit work for you.</p>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Ready to partner with us as a community ambassador?</h2>
                        </header>
                        <p>We have a program for you</p>
                        <ul className="actions uniform">
                            <li><a href="#" className="button special">Sign up as a Merchant Ambassador</a></li>
                            <li><a href="#" className="button">Find an EasyPay to start making payments</a></li>
                        </ul>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
