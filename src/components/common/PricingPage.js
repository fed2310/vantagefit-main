import React, { useState } from 'react'
import { StartTrialModal } from '.'
import { Collapse, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap'

const PricingPage = (props) => {
    return (
        <>
            <div className="main-content pricingpage">
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                <h2 className="title_head text-center title_spc animated">
                                    Choose a plan <br />
                                    <span>that best fits your requirements</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container price-container" id="scrollSection">
                        <div className="row noofUser pricingouter d-flex align_items_center">
                            <div className="col-lg-9 col-md-9 col-xs-12 col-sm-8 mobCenter">
                                <div className="user_heading">How many users do you expect?</div>
                                <p className="secondarytext">
                                    <b>More than 1,000 users? 
                                        <a href="https://go.vantagefit.io/contact-us/" className="companycolor"> Contact Us</a>
                                    </b>
                                </p>
                                <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 pricecalculator">
                                    <div className="range-slider">
                                        <input className="range-slider__range" type="range" defaultValue="100" min="10" max="1000" step="10"  />
                                        <span className="range-slider__value"></span>
                                    </div>
                                    <div className="userFlex">
                                        <span style={{textAlign:"left"}}>10 Users</span>
                                        <span className="d-right">1000 users</span>
                                    </div>
                                    <div className="text-center userLimit"> 
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_55/v1597401095/VantageFit/website/peoplerunning_compress.png" alt="ContactUs" className="hidden-xs hidden-sm hidden-sml lozad" />
                                        You have a big group. 
                                        <a href="https://go.vantagefit.io/contact-us/" className="companycolor">Contact Us</a> for custom pricing.
                                    </div>
                                  <div className="smallfont text-center">Move the slider to estimate how many people you expect to participate</div>
                               </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-12 col-sm-4">
                                <div className="usersbox text-center">
                                    <div className=""><span className="numberOfUserss"></span></div>
                                    Users
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tabsViewDisp">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 mx-auto col-xs-12 col-sm-12">
                                <ul className="tabValues pricingouter" id="tabSelection">
                                    <li attr="subscription" className="active subscriptiontab">Subscription</li>
                                    <li attr="onetime">One Time </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_space subscription showItem" >
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-4">
                                <div className="pricingouter priceboxes freebox">
                                    <div className="text-center planIndBox">
                                        <div>
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_50/v1580904957/VantageFit/website/free-plan-icon_compress.png" className="lozad" alt="freeicon" />
                                            <div><output className="output" plan='0'></output></div>
                                            <div className="displayUsers"></div>
                                            <div className="chooseplan">Free</div>
                                            <div className="displayUsers"></div>
                                        </div>
                                        <div className="priceperemployee pricePer" plan="0"><span className="amountperperson"></span></div>
                                    </div>
                                    <hr />
                                    <div className="additionals">
                                        <ul>
                                            <li>Limit of 100 users</li>
                                            <li>Access to only daily target challenge</li>
                                            <li>All features with realtime tracking</li>
                                        </ul>
                                    </div>
                                    <div className="action"><a href="#subscriptionPlan">Learn More</a></div>
                                    <div className="cta-price button-black transform text-center">
                                        <StartTrialModal />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-4">
                                <div className="pricingouter priceboxes premiumbox subscriptionPremium">
                                    <div className="text-center planIndBox">
                                        <div>
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_50/v1580904957/VantageFit/website/premium-plan-icon_compress.png" alt="premiumicon" />
                                            <div><output className="output" plan='2'></output></div>
                                            <div className="displayUsers">per month</div>
                                            <div className="chooseplan">Premium</div>
                                            <div className="displayUsers"><span className="numberOfUserss"></span> Users</div>
                                        </div>
                                        <div className="priceperemployee pricePer" plan="2"><span className="amountperperson"></span></div>
                                    </div>
                                    <hr />
                                    <div className="additionals">
                                        <ul>
                                            <li>Access to all challenge formats</li>
                                            <li>Admin Dashboard</li>
                                            <li>Customisation of Targets & Challenges</li>
                                        </ul>
                                    </div>
                                    <div className="action"><a href="#subscriptionPlan">Learn More</a></div>
                                    <div className="cta-price button-black transform text-center">
                                        <a href="https://go.vantagefit.io/get-a-demo/" className="button-style banner_btn">Request Demo</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-xs-12 col-sm-4">
                                <div className="pricingouter priceboxes enterprisebox">
                                    <div className="text-center planIndBox">
                                        <div>
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_50/v1580904957/VantageFit/website/enterprise-plan-icon_compress.png" alt="enterpriseicon" />
                                            <div><output className="output" plan='3'></output></div>
                                            <div className='displayUsers'>per month</div>
                                            <div className="chooseplan">Enterprise</div>
                                            <div className="displayUsers"><span className="numberOfUserss"></span> Users</div>
                                        </div>
                                        <div className="priceperemployee pricePer" plan="3"><span className="amountperperson"></span></div>
                                    </div>
                                    <hr />
                                    <div className="additionals">
                                        <ul>
                                            <li>Everything in Premium included</li>
                                            <li>Dedicated Account Manager</li>
                                            <li>Enterprise Single Sign-On</li>
                                        </ul>
                                    </div>
                                    <div className="action"><a href="#subscriptionPlan">Learn More</a></div>
                                    <div className="cta-price button-black transform text-center">
                                        <a href="https://go.vantagefit.io/contact-us/" className="button-style banner_btn">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="onetime hideItem" id="oneTimeChallengeBox">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 col-xs-12 col-sm-6 mx-auto">
                                <i className="fa fa-calendar"></i>
                                <select id="selectedNumberOfWeeks">
                                    <option value = "2">2 Weeks</option>
                                    <option value = "4">4 Weeks</option>
                                    <option value = "8">8 Weeks</option>
                                    <option value = "12">12 Weeks</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 col-xs-12 col-sm-6 mx-auto onetimeBox">
                                <div className="pricingouter priceboxes premiumbox">
                                    <div className="text-center planIndBox">
                                        <div>
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_50/v1580904957/VantageFit/website/onetimeicon_compress.png" alt="enterpriseicon" className="lozad" />
                                            <div><output className="output" plan='1'><span></span></output></div>
                                            <div className='displayUsers'>one time fee</div>
                                            <div className="chooseplan">One Time Challenge </div>
                                            <div className="displayUsers"><span className="numberOfUserss"></span> Users</div>
                                        </div>
                                        <div className="priceperemployee pricePer" plan="1"><span className="amountperperson"></span></div>
                                    </div>
                                    <hr />
                                    <div className="additionals">
                                        <ul>
                                            <li>Maximum duration - 12 weeks</li>
                                            <li>No Restriction on Type of challenge</li>
                                            <li>Customizable Targets and Prizes</li>
                                            <li>Unlimited number of users</li>
                                            <li>All features with realtime tracking</li>
                                            <li>Teams Supported</li>
                                            <li>Leaderboard</li>
                                            <li>Admin Dashboard with Reports</li>
                                        </ul>
                                    </div>
                                    <div className="action"><a href="#onetimePlan">Learn More</a></div>
                                    <div className="cta-price button-black transform text-center">
                                        <a href="https://go.vantagefit.io/get-a-demo/" className="button-style banner_btn">Request Demo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center">
                                <div className="b15 smallfont">Need more time? Check our subscription options <a href="#scrollSection" id="subscriptionSwitch" className='companycolor'>here</a></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Try VC for Free */}
                <section className="section_space">
                    <div style={{backgroundColor:"#f5f8fa"}}>
                        <div className="container custom-container mobCenter">
                            <div className="row d-flex align_items_center pricing_trial column-change">
                                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 text-center">
                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_200/v1588760727/VantageFit/website/Vfit-phone_compress.png" alt="freetrial" className="lozad" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 healthforce wow fadeInDown" >
                                    <div className="title_second">
                                        <h3 className="second_heading"><span>Try</span> Vantage Fit <span>for free</span></h3>
                                        <p>Start a 28-day free trial!</p>
                                        <div className="button-black transform b15">
                                            <StartTrialModal/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* subscription plans */}
                <section className="section_space subscription showItem" id="subscriptionPlan">
                    <div className="container custom-container">
                        <div className="row  wow fadeInUp animated">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                <div className="title_head text-center wow fadeInUp">Compare Plans</div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                <p className=" text-center wow fadeInUp secondarytext">
                                    Not sure which plan to pick? 
                                    <a href="https://go.vantagefit.io/contact-us/" className="companycolor"> Reach out</a> to us.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container custom-container comparePlansSection">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12 mx-auto ">
                                <div className="tablePlan text-center" align="center">
                                    <div className="indItems inputT">
                                        <div className="firstItem"></div>
                                        <div className="freeBox">Free</div>
                                        <div className="premiumBox">Premium</div>
                                        <div className="enterpriseBox">Enterprise</div>
                                    </div>
                                    <div className="indItems tabsViewMobile">
                                        <div className="firstItem" attr=""></div>
                                        <div className="freeBox active" attr="freeBox">Free</div>
                                        <div className="premiumBox" attr="premiumBox">Premium</div>
                                        <div className="enterpriseBox" attr="enterpriseBox">Enterprise</div>
                                    </div>
                                    <div className="pricingouter indItems">
                                        <table className="text-center tableSubscription" align="center">
                                            <tbody>
                                                <tr>
                                                    <td>Maximum Users supported</td>
                                                    <td className="freeBoxPlan">100</td>
                                                    <td className="premiumBoxPlan">Unlimited</td>
                                                    <td className="enterpriseBoxPlan">Unlimited</td>
                                                </tr>
                                                <tr>
                                                    <td>Number of Contests </td>
                                                    <td className="freeBoxPlan">1</td>
                                                    <td className="premiumBoxPlan">Unlimited</td>
                                                    <td className="enterpriseBoxPlan">Unlimited</td>
                                                </tr>
                                                <tr>
                                                    <td>Real-time tracking</td>
                                                    <td className="freeBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Personalized Recommendations</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Social Leaderboard</td>
                                                    <td className="freeBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Contest Management</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Incentivization</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Badges and Trophies</td>
                                                    <td className="freeBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Custom Weekly Themes</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Analytics Dashboard</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Priority Support</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"><span className="checkmark"></span></td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Customized Plan</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"> - </td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Launch Material</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"> - </td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>SSO Integration</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"> - </td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Dedicated Account Manager</td>
                                                    <td className="freeBoxPlan"> - </td>
                                                    <td className="premiumBoxPlan"> - </td>
                                                    <td className="enterpriseBoxPlan"><span className="checkmark"></span></td>
                                                </tr>
                                                <tr className='greyBackground desktopView'>
                                                    <td></td>
                                                    <td className="freebox freeBoxPlan">
                                                        <table align="center" className="innerTable">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="cta-price button-black transform text-center">
                                                                        <StartTrialModal />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td className="premiumbox premiumBoxPlan">
                                                        <table align="center" className="innerTable">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="cta-price button-black transform text-center">
                                                                        <a href="https://go.vantagefit.io/get-a-demo/" className="button-style banner_btn">Request Demo</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                    <td className="enterprisebox enterpriseBoxPlan">
                                                        <table align="center" className="innerTable">
                                                            <tbody>
                                                                <tr>
                                                                    <td className="cta-price button-black transform text-center">
                                                                        <a href="https://go.vantagefit.io/contact-us/" className="button-style banner_btn">Contact Us</a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* mobile view */}
                                        <div className="mobileView mobileCta freeBoxPlan freebox active">
                                            <div className="cta-price button-black transform text-center">
                                                <StartTrialModal />
                                            </div>
                                        </div>
                                        <div className="mobileView mobileCta premiumbox premiumBoxPlan">
                                            <div className="cta-price button-black transform text-center">
                                                <a href="https://go.vantagefit.io/get-a-demo/" className="button-style banner_btn">Request Demo</a>
                                            </div>
                                        </div>
                                        <div className="mobileView mobileCta enterprisebox enterpriseBoxPlan">
                                            <div className="cta-price button-black transform text-center">
                                                <a href="https://go.vantagefit.io/contact-us/" className="button-style banner_btn">Contact Us</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* One time plan box */}
                <section className="onetime hideItem section_space" id="onetimePlan">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12 mx-auto ">
                                <div className="tablePlan text-center" align="center">
                                    <div className="indItems">
                                        <div className="premiumBox">Included Features</div>
                                    </div>
                                    <div className="pricingouter indItems">
                                        <table className="text-center tableSubscription" align="center">
                                            <tbody>
                                                <tr>
                                                    <td>Maximum Users supported</td>
                                                    <td>Unlimited</td>
                                                </tr>
                                                <tr>
                                                    <td>Real-time tracking</td>
                                                    <td><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Social Leaderboard</td>
                                                    <td><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Badges and Trophies</td>
                                                    <td><span className="checkmark"></span></td>
                                                </tr>
                                                <tr>
                                                    <td>Teams</td>
                                                    <td><span className="checkmark"></span></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Schedule a VFit Demo Form */}
                <section className="section_space">
                    <div style={{backgroundColor:"#F5F8FA"}}>
                        <div className="container custom-container mobCenter">
                            <div className="row d-flex align_items_center pricing_trial column-change">
                                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 text-center">
                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_250/v1588760727/VantageFit/website/image-questions_compress.png" alt="freetrial" className="lozad" />
                                </div>
                                <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 healthforce wow fadeInDown animated">
                                    <div className="title_second">
                                        <h3 className="second_heading"><span>Schedule a </span>Vantage Fit <span>Demo</span></h3>
                                        <p>How Corporate Wellness program Can Help Your Organisation</p>
                                        <div className="button-black transform b15">
                                            <a href="https://go.vantagefit.io/get-a-demo/" className="button-style banner_btn">Request Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ section starts */}
                <section className="section_space">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12 text-center ">
                                <div className="sprite faqpricing featuressprite hidden-xs hidden-sm"></div>
                            </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                            <div className="title_head text-center wow fadeInUp title_spc b15">Frequently Asked Questions</div>
                        </div>
                    </div>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-xs-12 col-sm-12 mx-auto ">
                                {/* Accordion starts */}
                                <div id="accordion" className="">
                                    <Card>
                                        <Button id="faq1">
                                          I am not looking for a Year-round wellness initiative in particular, I want to run it only for a Few weeks/months in a year. Is that supported?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq1">
                                            <CardBody>
                                                Absolutely, We have a One time subscription plan which allows you to do just that. If you have more than 1000 users, you can also ask for a custom Price Quote. Click <a href="https://go.vantagefit.io/contact-us/" className="companycolor">here</a> to Talk to Sales.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq2">
                                            What are the kind of challenges that I can run?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq2">
                                            <CardBody>
                                                <p>You can run challenges which revolves around a single type of activity and you can run challenges which have tasks of varying activities.</p>
                                                <p>For single activity challenges, Steps and Distance are the supported metrics since these accurately tracked by the app.</p>
                                                <p>You can also have challenges which do not have a target instead have a race to finish line challenge.</p>
                                                <p><b>Here are the different supported formats.</b></p>
                                                <ul>
                                                    <li>Race to Finish line</li>
                                                    <li>Daily Step/Distance Target and Competing Leaderboard</li>
                                                    <li>Multiple Activities and Targets with Competing Leaderboard</li>
                                                </ul>
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq3">
                                            How long can I run a challenge ?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq3">
                                            <CardBody>
                                                <p>You can run a challenge for any duration between 2 - 52 weeks.</p>
                                                <p>Although we do suggest to not run a challenge for longer than 12 weeks since it may become a bit monotonous for the end users, but we do support any duration longer than 2 weeks</p>
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>

                                    <Card>
                                        <Button id="faq4">
                                            What kind of fitness trackers are supported by Vantage Fit ?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq4">
                                            <CardBody>
                                                Vantage Fit supports almost all the wearables available in the industry via Integrating with Google Fit / Apple Health and correspondingly Fitbit, Garmin, Xiaomi Bands, Amazefit bands, Apple Watch and more.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq5">
                                            Can people from various countries and timezones participate in a challenge?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq5">
                                            <CardBody>
                                                Yes, we support global challenges with multiple timezones and multiple currencies for redemption of prizes.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq6">
                                            How many times can I avail the One time subscription plan?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq6">
                                            <CardBody>
                                                A single one time subscription can vary between 2-12 weeks, In one fiscal year we allow you to use the subscribe to the one time challenge as many times as you wish. But we strongly recommend moving to a Yearly subscription plan if you have to apply the one time challenge plan. We also provide discounts based on the size of your user base.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq7">
                                            Can I use the Free plan before subscribing to a Paid plan to try out Vantage Fit?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq7">
                                            <CardBody>
                                                Absolutely, We have created the free plan so you can be sure and confident about Vantage Fit’s Capabilities.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq8">
                                            What do I do once my free plan ends?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq8">
                                            <CardBody>
                                                If you wish to extend your free plan, and try one more challenge, please reach out to us at <a href="mailto:partner@vantagecircle.com" className='companycolor'>partner@vantagecircle.com</a>. If you wish to move to a paid plan (one time or a yearly subscription), click <a href="https://go.vantagefit.io/contact-us/" className="companycolor">here</a> to contact sales.
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq9">
                                            I have a large workforce, But I want to implement this only for a group of people. Is that supported.

                                        </Button>
                                        <UncontrolledCollapse toggler="#faq9">
                                            <CardBody>
                                                <p>Yes, There are three ways to achieve this.</p>
                                                <p>You can either only enable registration for a selected group of people,or you can create a challenge which is applicable only to a selected Business Unit or Location or even Gender or a combination of these, For Example, If you wish to have a challenge for the Australian Girls Cycling Team, you can and finally, you can create a private challenge and send an invite link to only those people who you want to join.</p>
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq10">
                                            What options do we have for reporting and analytics?
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq10">
                                            <CardBody>
                                                <p>In the Admin Dashboard that you will be provided (Not included in Free Plan), you can view Insights, summaries, analytics and reports on an organisational level and on a challenge level too.</p>
                                                <p>You can also manage challenges, teams and broadcast health tips from the same Admin Dashboard.</p>                                            
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                    <Card>
                                        <Button id="faq11">
                                            My question is not listed here.
                                        </Button>
                                        <UncontrolledCollapse toggler="#faq11">
                                            <CardBody>
                                                Please reach out to us at <a href="mailto:partner@vantagecircle.com" className="companycolor">partner@vantagecircle.com</a>                                            
                                            </CardBody>
                                        </UncontrolledCollapse>
                                    </Card>
                                </div>
                                {/* Accordion ends */}
                            </div>
                        </div>
                    </div>
                </section>
                {/* FAQ section ends */}
            </div>
        </>
    );
}

export default PricingPage;