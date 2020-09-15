import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Navigation } from '.'
import { PostCard } from '.'
import config from '../../utils/siteConfig'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import ScriptTag from 'react-script-tag';


// Styles
// import '../../styles/app.css'
import '../../styles/bootstrap.min.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import '../../styles/custom.css'
import '../../styles/responsive.css'


// import '../../js/customscripts.js'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/

const DefaultLayout = ({ data, children, bodyclassName, isHome }) => {
    const site = data.allGhostSettings.edges[0].node
    const twitterUrl = site.twitter ? `https://twitter.com/${site.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = site.facebook ? `https://www.facebook.com/${site.facebook.replace(/^\//, ``)}` : null

    return (
        <>
            <Helmet>
                <html lang={site.lang} />
                <style type="text/css">{`${site.codeinjection_styles}`}</style>

                <body className={bodyclassName} />
            </Helmet>

            <div className="viewport home-template home page-template page-template-elementor_header_footer page page-id-3550 wp-embed-responsive not_logged_in elementor-default elementor-template-full-width elementor-page elementor-page-3550">

                <div className="viewport-top">
                    {/* The main header section on top of the screen */}
                    

                    <header className="header_area  header_stick">
                        <nav className="navbar navbar-expand-lg menu_center">
                            <div className="container custom_container">
                                
                                <div className="site-mast-left">
                                    <Link to="/" className="navbar-brand sticky_logo">
                                        {site.logo ?
                                            <img className="d_logo site-logo" src={site.logo} alt={site.title} />
                                            : <Img fixed={data.file.childImageSharp.fixed} alt={site.title} />
                                        }
                                        <img width="220" alt="Vantage Circle" className="stick_logo lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/00-vantagefit-logo.png" data-loaded="true" />
                                    </Link>
                                </div>
                                    
                                <span className="marketinglanding post no-image">
                                    <div className="collapse navbar-collapse justify-content-center">
                                        <div id="menu-main-menu-global" className="navbar-nav menu  ml-auto">
                                            <div className="nav-home menu-item nav-item" role="menuitem">
                                                <Navigation data={site.navigation} navclassName="site-nav-item" />
                                            </div>
                                        </div>
                                        <a className="menu_cus btn_get btn-meta btn_hover menu-top" href="https://go.vantagefit.io/get-a-demo/">Request Demo </a>
                                    </div>
                                </span>
                            </div>
                        </nav>
                    </header>
                    { isHome ?    
                    <div className="elementor">
                        <section className="n_hero_banner_area" id="home">
                            
                            <div className="container custom-container">
                                <div className="row column-change ipadcolumn-change">
                                    <div className="col-lg-7 col-md-12 left_pclr">
                                        <div className="n_banner_content">
                                            <h1>Revolutionize Your Corporate Wellness Program</h1>
                                            <p>Give your employees the best workplace experience with an engaging corporate wellness program. Get them moving and encourage a healthy lifestyle for better productivity with Vantage Fit.</p>
                                            <div className="app_downloadbanner abtesting">
                                                <div className=" transform button-style dwnload_app">
                                                    <a href="https://apps.apple.com/in/app/vantage-fit/id1393594182" target="_blank">
                                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_186/v1580904957/VantageFit/website/appstore.png" alt="ios" className="donloadappimg lozad" />
                                                    </a>
                                                </div>
                                                <div className=" transform button-style dwnload_app">
                                                    <a href="https://play.google.com/store/apps/details?id=com.bargaintechnologies.vantagefit.v_fit" target="_blank">
                                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_186/v1580904957/VantageFit/website/googleplay.png" alt="playstore" className="donloadappimg lozad" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="action_btn d-flex align-items-center mt_40 mb_40 "> <a href="https://go.vantagefit.io/get-a-demo/" className="vc_button banner_btn button-style button_width"> Request Demo </a>
                                                <a className="popupyoutubevideo popup-youtube banner_btn white_button button-style button_width" href="https://www.youtube.com/watch?v=fVhfKMo3H80" style={{marginLeft: "20px"}}>
                                                    <div className=""> <span className="fa fa-play-circle" ></span><span >&nbsp;&nbsp;Watch Video </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 offset-lg-1 col-md-12">
                                        <div className="mobile_img ">
                                            <img className="mobile_banner" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_410/v1597380700/VantageFit/website/vantagefit-devices_compress.png" alt="Mobile App" />
                                            <img className="vfit hidden-xs hidden-sm hidden-sml lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_360/v1597380700/VantageFit/website/vantage-fit-person_compress.png" alt="VFit" />
                                        </div>
                                    </div>
                                    <div className="shape_images hidden-xs hidden-sm">
                                        <img className="lines lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_600/v1580904957/VantageFit/website/lines.png" alt="lines" />
                                        <img className="pulse lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1580904957/VantageFit/website/heart-lines.png" alt="pulse" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="container custom-container">
                                <div className="row ">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <h2 className="title_head text-center title_spc">Corporate Wellness Program Statistics</h2>
                                    </div>
                                    <div className="circleGraphic col-lg-3 col-md-3 col-xs-12 col-sm-6 hidden-xs hidden-sm hidden-sml">
                                        <div className="circle" data-percent="91"></div>
                                    </div>
                                    <div className="circleGraphic col-lg-3 col-md-3 col-xs-12 col-sm-6 hidden-xs hidden-sm hidden-sml">
                                        <div className="circle" data-percent="60"></div>
                                    </div>
                                    <div className="circleGraphic col-lg-3 col-md-3 col-xs-12 col-sm-6 hidden-xs hidden-sm hidden-sml">
                                        <div className="circle" data-percent="27"></div>
                                    </div>
                                    <div className="circleGraphic col-lg-3 col-md-3 col-xs-12 col-sm-6 hidden-xs hidden-sm hidden-sml">
                                        <div className="circle" data-percent="61"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container custom-container">
                                <div className="row wellnessprogram">
                                    <div className="col-lg-3 col-md-12 col-xs-12 col-sm-6 text-center content_benefits">
                                        <div className="innertext innerheading">Motivated <span>Workforce</span>
                                        </div>
                                        <p>91% of employees that work in companies that prioritize workplace wellness say that they feel motivated and focused at work.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-xs-12 col-sm-6 text-center content_benefits">
                                        <div className="innertext innerheading">Reduced Health <span>Care Costs</span>
                                        </div>
                                        <p>60% of surveyed employers reported that implementing employee wellness programs helped reduce the healthcare costs for employees.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-xs-12 col-sm-6 text-center content_benefits">
                                        <div className="innertext innerheading">Decreased <span>Absenteeism</span>
                                        </div>
                                        <p>Implementing workplace wellness measures can help employers bring down employee absenteeism due to health related issues by 27%.</p>
                                    </div>
                                    <div className="col-lg-3 col-md-12 col-xs-12 col-sm-6 text-center content_benefits">
                                        <div className="innertext innerheading">Healthier <span>Lives</span>
                                        </div>
                                        <p>61% of employees agreed that they had made healthier lifestyle choices because of their company’s employee wellness program.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <div className="title_head text-center title_spc"><span>How Corporate Wellness Program</span>
                                            <br />Can Help Your Organisation</div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row d-flex align_items_center">
                                    <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 content_benefits ">
                                        <div className="outline-round">
                                            <div className="rel_text">
                                                <div className="innertext">Increase Productivity</div>
                                                <p>An employee’s productivity is determined by how healthy they are, both physically and mentally. Vantage Fit packs in various health challenges and tasks for helping your employees take up healthy habits and boost their productivity. Our app also enables the organizations to assign various health tasks to your employees, thereby encouraging them to stay healthy and fit.</p>
                                            </div>
                                        </div>
                                        <div className="outline-round">
                                            <div className="rel_text">
                                                <div className="innertext">Decrease Absenteeism</div>
                                                <p>Employee absenteeism has been a major problem across many organizations. Most of the time, this issue arises due to various health-related issues that your employees may face. However, with a corporate wellness program at your disposal, you can mitigate it by encouraging your employees to take up healthy habits. And that’s what our app does!</p>
                                            </div>
                                        </div>
                                        <div className="outline-round">
                                            <div className="rel_text">
                                                <div className="innertext">Enhance Company Culture</div>
                                                <p>The success of any organization is highly determined by its overall workplace culture. Our corporate wellness program delivered through Vantage Fit helps you promote a culture of health and wellbeing across your company. Thus, enhancing your company culture by nurturing a healthy and engaged workforce.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 hidden-xs hidden-sm">
                                        <div className="text-center">
                                            <img className=" image-fit mob_image lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/corporate-wellness-organisation-compress.png" alt="wellness" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space mob-section">
                            <div className="container">
                                <div className="">
                                    <div className="row d-flex align_items_center">
                                        <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 hidden-xs hidden-sm">
                                            <div className="text-center">
                                                <img className="mob_image lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/increase-engagement-compress.png" alt="engagement" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12 col-xs-12 col-sm-12 content_benefits ">
                                            <div className="outline-round">
                                                <div className="rel_text ">
                                                    <div className="innertext">Promote Healthy Habits</div>
                                                    <p>Every great thing begins with adopting healthy habits, and workplace wellness programs are specially designed for this purpose. By initiating a wellness program in your organization, you can help your employees develop healthy habits and transform their lifestyles both at home and work.</p>
                                                </div>
                                            </div>
                                            <div className=" outline-round">
                                                <div className="rel_text">
                                                    <div className="innertext">Increase Employee Engagement</div>
                                                    <p>Highly engaged employees are the backbone of successful corporations. A workplace wellness program helps you create an engaging atmosphere around your organization to boost your employees’ morale. It is when your employees feel physically and mentally fit, they will give their best performance.</p>
                                                </div>
                                            </div>
                                            <div className="outline-round">
                                                <div className="rel_text">
                                                    <div className="innertext">Reduce Healthcare Costs</div>
                                                    <p>Every year, companies around the globe pay a hefty sum for providing subsidized insurance plans and other health benefits to their employees. But, encouraging your workforce to adopt healthy habits within their work-life will surely bring down the overall employee healthcare costs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="container custom-container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <div className="title_head text-center">Features at a Glance</div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <p className=" text-center title_spc secondarytext">Here’s a quick look at some of the key features of Vantage Fit.</p>
                                    </div>
                                    <div className="row_elementor features title_spc">
                                        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 left-activity">
                                            <div data-img="activity" className="box_item ">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm activitytracker"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm activitytrackeractive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Activity &
                                                        <br />Calorie Tracker</div>
                                                </div>
                                            </div>
                                            <div data-img="heartrate" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm heartmonitor"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm heartmonitoractive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Heart Rate
                                                        <br />Monitor</div>
                                                </div>
                                            </div>
                                            <div data-img="health" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm wearabledev"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm wearabledevactive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Wearable
                                                        <br />Devices</div>
                                                </div>
                                            </div>
                                            <div data-img="contest" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm contestchallenges"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm contestchallengesactive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Contest and
                                                        <br />Challenges</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 mid-activity hidden-xs hidden-sm">
                                            <div id="activity">
                                                <img className="mob_image Image-Overlay active-img lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/activity-calorie_compress.png" alt="activity" />
                                            </div>
                                            <div id="heartrate">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/heart-rate_compress.png" alt="heartrate" />
                                            </div>
                                            <div id="health">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/wearable-devices_compress.png" alt="health dairy" />
                                            </div>
                                            <div id="contest">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/contest-challenge_compress.png" alt="contest" />
                                            </div>
                                            <div id="assessment">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/health-risk-assesment_compress.png" alt="contest" />
                                            </div>
                                            <div id="meter">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/mood-o-meter_compress.png" alt="moodometer" />
                                            </div>
                                            <div id="redeem">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/fitness-points_compress.png" alt="fitnesspoints" />
                                            </div>
                                            <div id="leaderboard">
                                                <img className="mob_image Image-Overlay" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/realtime-leaderboard_compress.png" alt="leaderboard" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-xs-12 col-sm-12 right-activity">
                                            <div data-img="assessment" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm healthrisk"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm healthriskactive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Health Risk
                                                        <br />Assessment</div>
                                                </div>
                                            </div>
                                            <div data-img="meter" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm moodometer"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm moodometeractive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="moodmeter trackertext">Mood-o-meter</div>
                                                </div>
                                            </div>
                                            <div data-img="redeem" className="box_item ">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm redeemfitness"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm redeemfitnessactive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Redeemable
                                                        <br />Fitness Points</div>
                                                </div>
                                            </div>
                                            <div data-img="leaderboard" className="box_item">
                                                <div className="featuresimg">
                                                    <div className="sprite first-image activebox hidden-xs hidden-sm leaderboardrealtime"></div>
                                                    <div className="sprite second-image hidden-xs hidden-sm leaderboardrealtimeactive"></div>
                                                </div>
                                                <div className="featurestext">
                                                    <div className="trackertext">Realtime
                                                        <br />Leaderboard</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <div className=" text-center"><a href="/features" className="vc_active">Learn More <span className="fa fa-long-arrow-right"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="video_area section_space">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <div className="title_head text-center">Check out how Vantage Fit helps you</div>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <p className=" text-center title_spc secondarytext">A perfect app that addresses more than just health</p>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
                                        <div className="video_content">
                                            <div className="video_info">
                                                <div className="ovarlay_color"></div>
                                                <a className="popupvideosection" href="https://www.youtube.com/watch?v=fVhfKMo3H80">
                                                    <div className="wrapper">
                                                        <div className="iconplay d-flex align_items_center"><i className="fa fa-play"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space hidden-xs hidden-sm" style={{paddingTop: "0"}}>
                            <div style={{backgroundColor: "#e8fcfa"}}>
                                <div className="container custom-container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 healthyworkforce">
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_500/v1597380700/VantageFit/website/person-running-corporate-wellness_compress.png" alt="Request Demo" className="mob_image lozad" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 healthforce wow fadeInDown animated">
                                            <div className="title_second">
                                                <h3 className="second_heading"><span>Build a</span> Healthy Workforce!</h3>
                                                <p>Download Vantage Fit app today.</p>
                                                <div className="store-icons">
                                                    <div className="app_downloadbanner index_download">
                                                        <div className=" transform button-style dwnload_app">
                                                            <a href="https://apps.apple.com/in/app/vantage-fit/id1393594182" target="_blank">
                                                                <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_186/v1580904957/VantageFit/website/appstore.png" alt="ios" className="buildapp lozad" />
                                                            </a>
                                                        </div>
                                                        <div className=" transform button-style dwnload_app">
                                                            <a href="https://play.google.com/store/apps/details?id=com.bargaintechnologies.vantagefit.v_fit" target="_blank">
                                                                <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_186/v1580904957/VantageFit/website/googleplay.png" alt="playstore" className="buildapp lozad" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="container">
                                <div className="row column-change d-flex align_items_center">
                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                                        <div className="title_head default-spc"><span>Intuitive </span>
                                            <br />Admin Dashboard</div>
                                        <p>Vantage Fit includes a highly advanced and intuitive dashboard that allows managers to create and run various health challenges for their employees and view the real-time progress of each employee.</p>
                                        <div className="image-content">
                                            <div>
                                                <div className="sprite configureicon realicon hidden-xs hidden-sm"></div>Create and Configure Wellness Contests</div>
                                            <div>
                                                <div className="sprite realtimeprogress realicon hidden-xs hidden-sm"></div>Track Real-time Progress</div>
                                            <div>
                                                <div className="sprite healthinsignts realicon hidden-xs hidden-sm"></div>Health Insights and Metrics</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 text-center image-change">
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/admindashboard_compress.png" alt="admindashboard" className="mob_image image-fit lozad" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="wellness-background">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 text-right mob-pull">
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_268/v1597380700/VantageFit/website/_guide-to-corporate-wellness_compress.png" alt="wellnessprogram" className="downloadbook hidden-xs lozad" />
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 healthforce wow fadeInDown animated">
                                            <div className="title_second">
                                                <div><strong className="guide">A COMPLETE GUIDE TO</strong>
                                                </div><strong className="second_heading">Corporate<br />Wellness Programs</strong> 
                                            </div>
                                            <div className="transform">
                                                <a className="popup-youtube banner_btn white_button button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_15/v1580904957/VantageFit/website/download.png" alt="freedownload" className="hidden-xs hidden-sm lozad" /> 
                                                    <span>&nbsp;&nbsp;Free Download </span> 
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="images-wellness hidden-xs hidden-sm hidden-sml">
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/dumbell.png" className="img-1 lozad" alt="wellnessprogram" />
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/cycle.png" className="img-2 lozad" alt="wellnessprogram" />
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/food.png" className="img-3 lozad" alt="wellnessprogram" />
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/shoe.png" className="img-4 lozad" alt="wellnessprogram" />
                                    </div>
                                </div>
                            </div>
                            <div className="welness-bottom hidden-xs"></div>
                        </section>
                        <section className="section_space">
                            <div className="container">
                                <div className="row d-flex align_items_center">
                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12 wow fadeInLeft animated animated text-center">
                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597724811/VantageFit/website/week-campaign-12_compress.png" alt="campaign" className="mob_image lozad" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-xs-12 col-sm-12">
                                        <div className="title_head default-spc"><span>12 Week</span>
                                            <br />Campaign</div>
                                        <p>Vantage Fit’s unique 12-Week Health Campaign feature gives employers the liberty to usher workplace wellness by assigning different health challenges and tasks specially designed by our certified fitness experts each week to help your employees take up a healthy lifestyle.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div>
                                <div className="container custom-container">
                                    <div className="row d-flex align_items_center title_second column-change">
                                        <div className="col-lg-8 col-md-8 col-xs-12 col-sm-12">
                                            <div className=" wow fadeInDown animated">
                                                <h4 className="second_heading"><span>Keep your employees</span> fit and productive.</h4>
                                                <p>Launch a successful employee wellness program with Vantage Fit today.</p>
                                                <br />
                                                <div className="button-black transform "> <a href="https://go.vantagefit.io/get-a-demo" className="button-style banner_btn">Request Demo</a> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12 image-change text-center">
                                            <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_250/v1597380700/VantageFit/website/build-a-healthy-workforce_compress.png" alt="Stay fit" className="lozad hidden-xs" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section_space">
                            <div className="container custom-container">
                                <div className="title_head title_spc text-center">The Vantage Fit Blog</div>
                                {posts.map(({ node }) => (
                                    // The tag below includes the markup for each post - components/common/PostCard.js
                                    <PostCard key={node.id} post={node} />
                                ))}
                            </div>
                        </section>
                    </div> :
                    null}

                    { !isHome ?
                    <main className="site-main">
                        {/* All the main content gets inserted here, index.js, post.js */}
                        {children}
                    </main>:
                    null}

                </div>

                <div className="viewport-bottom">
                    {/* The footer at the very bottom of the screen */}

                    <footer className="new_footer_area bg_color marketinglanding{{post_class}}">
                        <div className="marketinglanding{{post_class}}">
                            <div className="new_footer_top">
                                <div className="container">
                                    <div className="row">
                                        <div id="custom_html-2" className="widget_text widget footer-widget col-lg-3 col-md-12 col-sm-12 widget_custom_html">
                                            <div className="widget_text f_widget about-widget">
                                                <div className="textwidget custom-html-widget">
                                                    <p><img className="lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/poweredby.png" alt="Vantage Circle" /></p>
                                                    <p>Collaborate with us to provide your employees an engaging and rewarding experience.</p>
                                                    <div className="social-icons">
                                                        <div className="icons">
                                                            <a href="https://www.facebook.com/Vantagefit-114318070217339/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a>
                                                        </div>
                                                        <div className="icons">
                                                            <a href="https://twitter.com/FitVantage" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                                        </div>
                                                        <div className="icons">
                                                            <a href="https://in.linkedin.com/showcase/vantagefit" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                                        </div>
                                                        <div className="icons">
                                                            <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube-play" aria-hidden="true"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="nav_menu-3" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                            <div className="f_widget about-widget pl_70">
                                                <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Company</h3>
                                                <div className="menu-footer-3-company-container">
                                                    <ul id="menu-footer-3-company" className="menu">
                                                        <li id="menu-item-586" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-586"><a href="https://www.vantagecircle.com/about-us/" className="nav-link" target="_blank">About Us </a></li>
                                                        <li id="menu-item-541" className="menu-item menu-item-type-post_type_archive menu-item-object-career menu-item-541">
                                                            <a href="https://www.vantagecircle.com/career/" className="nav-link" target="_blank">Career </a>
                                                        </li>
                                                        <li id="menu-item-608" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-608"><a href="https://go.vantagefit.io/contact-us/" className="nav-link">Contact Us </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="nav_menu-2" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                            <div className="f_widget about-widget pl_70">
                                                <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Solutions</h3>
                                                <div className="menu-footer-2-solutions-container">
                                                    <ul id="menu-footer-2-solutions" className="menu">
                                                        <li id="menu-item-382" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-382">
                                                            <a href="https://www.vantagecircle.com/solutions/rewards-recognition/" className="nav-link" target="_blank">Employee Recognition </a>
                                                        </li>
                                                        <li id="menu-item-380" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-380">
                                                            <a href="https://www.vantagecircle.com/solutions/employee-discount/" className="nav-link" target="_blank">Employee Discount </a>
                                                        </li>
                                                        <li id="menu-item-381" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-381">
                                                            <a href="https://www.vantagecircle.com/solutions/employee-survey/" className="nav-link" target="_blank">Employee Survey </a>
                                                        </li>
                                                        <li id="menu-item-394" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-394"><a href="https://www.vantagefit.io" className="nav-link">Employee Wellness </a></li>
                                                        <li id="menu-item-393" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-393">
                                                            <a href="https://www.vantagecircle.com/employee-engagement-platform/" className="nav-link" target="_blank">Employee Engagement </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="nav_menu-4" className="widget footer-widget col-lg-3 col-md-12 widget_nav_menu col-sm-12">
                                            <div className="f_widget about-widget pl_70">
                                                <h3 className="widget_title f-title f_600 t_color f_size_18 mb_40">Resource Center</h3>
                                                <div className="menu-footer-4-links-container">
                                                    <ul id="menu-footer-4-links" className="menu">
                                                        <li id="menu-item-587" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-587"><Link className="nav-link" to="/resources/">Resources</Link></li>
                                                        <li id="menu-item-389" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-389"><a href="https://blog.vantagefit.io/" className="nav-link">Blog </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bottom">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-7 col-md-6"><p>© Vantage Circle. 2020 All rights reserved.</p></div>
                                    <div className="col-lg-6 col-sm-5 text-right col-md-6">
                                        <p><a href="https://www.vantagecircle.com/terms-conditions/" target="_blank">Terms and Conditions</a>&nbsp; |&nbsp; <a href="https://www.vantagecircle.com/privacy-policy/" target="_blank">Privacy Policy</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>

                </div>
            </div>

        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyclassName: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        file: PropTypes.object,
        allGhostSettings: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allGhostSettings {
                    edges {
                        node {
                            ...GhostSettingsFields
                        }
                    }
                }
                file(relativePath: {eq: "ghost-icon.png"}) {
                    childImageSharp {
                        fixed(width: 30, height: 30) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
