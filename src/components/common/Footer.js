import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Navigation } from '.'

const Footer = () => {
    return (
        <>
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
                                                <p><img width="255" height="64" className="lozad" loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1580904957/VantageFit/website/poweredbyVC-compressed.png" alt="Vantage Circle" /></p>
                                                <p>Collaborate with us to provide your employees an engaging and rewarding experience.</p>
                                                <div className="social-icons">
                                                    <div>
                                                        <a href="https://www.facebook.com/Vantagefit-114318070217339/" target="_blank" rel="noopener noreferrer"><div className="sprite2 fb-sprite iconss"></div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="https://twitter.com/FitVantage" target="_blank" rel="noopener noreferrer"><div className="sprite2 twitter-sprite iconss"></div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="https://in.linkedin.com/showcase/vantagefit" target="_blank" rel="noopener noreferrer"><div className="sprite2 linkedin-sprite iconss"></div>
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a href="https://www.youtube.com/channel/UCzb6J4NEmhuGpj_-u2kz7aw" target="_blank" rel="noopener noreferrer"><div className="sprite2 youtube-sprite iconss"></div>
                                                        </a>
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
            
        </>
    );
}

export default Footer;