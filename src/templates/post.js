import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data, location }) => {
    const post = data.ghostPost

    return (
        <>
            <MetaData
                data={data}
                location={location}
                type="article"
            />
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet>

            <Layout>
                <div className="elementor">
                    <div className="elementor-inner">
                        <div className="elementor-section-wrap">
                            <section className="breadcrumb_area breadcrumb_area_two vc-btn-gradient-color vc-btn-gradient-general"> 
                                <img loading="lazy" className="breadcrumb_shap hidden-xs lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_500/v1580904957/VantageFit/website/lines.png" alt="lines" />
                                <div className="marketinglanding">
                                    <img loading="lazy" className="breadcrumb_pulse hidden-xs lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1580904957/VantageFit/website/heart-lines.png" alt="pulse" />
                                </div>
                                
                                <div className="container">
                                    <div className="breadcrumb_content text-center main_title">
                                        <h1> {post.title}</h1>
                                    </div>
                                </div> 
                            </section>
                            <div class="main-content b10">
                                <section>
                                    <div class="container custom-container">
                                        <div class="row post-content details-post">
                                            
                                            <article class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                                                <div class="imageholder">
                                                    { post.feature_image ?
                                                        <figure className="post-feature-image">
                                                            <img loading="lazy" src={ post.feature_image } alt={ post.title } />
                                                        </figure> : null }
                                                </div>
                                                {/* The main post content */ }
                                                <section
                                                    className="content-body load-external-scripts"
                                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                                />
                                            </article>
                                            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                                {/*  downloadebook */}
                                                <div class="downloadsection text-center hidden-xs hidden-sm hidden-sml" style={{position: "relative"}}>
                                                    <div class="innerspace" >
                                                        A Complete Guide To 
                                                        <div class="sideheading">Corporate Wellness Programs</div>
                                                    </div>
                                                    <div style={{position:"relative", zIndex:"9"}}>
                                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597380700/VantageFit/website/_guide-to-corporate-wellness_compress.png" alt="wellnessprogram" class="dwnloadbookimage lozad" />
                                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597401094/VantageFit/website/freeebook_compress.png" alt="free ebook" class="freeebook lozad" />
                                                    </div>
                                                    <div class="ebookbackground compny_background"></div>
                                                    <div class="transform button_sidebar">
                                                        <a class="popup-youtube banner_btn blackbutton button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                                           <span>Free Download </span>
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* requestdemo */}
                                                <div class="downloadsection text-center hidden-xs hidden-sm hidden-sml" style={{position: "relative"}}>
                                                    <div class="compny_background min_hght innerspace">
                                                        <div>Get your employees healthy and fit with </div>
                                                        <div class="sideheading">Vantage Fit</div>
                                                    </div>
                                                    <div class="request_demo text-center min_hght_2">
                                                        <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_234/v1588760727/VantageFit/website/Vfit-phone_compress.png" alt="requestdemo" class="requestdemo_sidebar lozad" />
                                                    </div>
                                                    
                                                    <div class="transform button_sidebar">
                                                        <a class="popup-youtube banner_btn blackbutton button-style" href="https://go.vantagefit.io/get-demo/">
                                                           <span>Request Demo</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="rightsidebar">
                                                    {/* {{#get "posts" include="tags,authors" limit="6"  order="published_at desc"}}
                                                    <div class="innerspace_w">
                                                        <div class="post-title sidebartitle ">Recent Post
                                                    </div>
                                                    
                                                        {{#foreach posts}}
                                                        <div class=" d-flex align_items_center ind-row">
                                                        <div class="pclrd col-lg-4 col-md-3 col-xs-12 col-sm-3 pclr"><a href="{{url}}"><img loading="lazy" class="img-ind img-responsive" src="{{img_url feature_image}}" alt="{{title}}"/></a></div>
                                                            
                                                        <div class="col-lg-8  col-md-9 col-xs-12 col-sm-9" style="line-height:1.5"><a href="{{url}}" class="title-post-ind">{{title}}</a>
                                                        <div class="smallfont">
                                                            {{date format="DD-MM-YYYY"}}
                                                        </div>
                                                        </div>
                                                        </div>
                                                        {{/foreach}}
                                                    
                                                    </div>
                                                    
                                                    {{/get}} */}
                                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/w_275/v1580904957/VantageFit/website/pattern-recentpost.png" alt="postdesign" class="postdesign lozad" />
                                                </div>
                                                {/* downloadebook sticky */}
                                                <div class="downloadsection text-center sticky innerspace compny_background hidden-xs hidden-sm">
                                                    <div class="sideheading">Download our eBook for Free</div>
                                                    <div class="b15">
                                                        A Complete Guide To Corporate Wellness Programs
                                                    </div>
                                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597724810/VantageFit/website/vantagefit-bookcover_compress.png" alt="wellnessprogram" class="imagesticky" />
                                                    
                                                    <div class="transform ">
                                                        <a class="popup-youtube banner_btn white_button button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                                           <span style={{color: "#ffffff"}}>Free Download </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                       </div>
                                    </div>
                                </section>
                                <section class="section_space b10 hidden-xs ">
                                    <div class="col-lg-12 contentebook compny_background innerspace mb10 resourceebookd hidden-sml hidden-sm">
                                         <div class="flexd row">
                                            <div class="col-md-5 col-lg-5 col-xs-12 col-sm-6 text-center">
                                                <img loading="lazy" class="pulseblog hidden-xs lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_272/v1580904957/VantageFit/website/heart-lines.png" alt="pulse" />
                                                <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597401094/VantageFit/website/freeebook_compress.png" alt="free ebook" class="freebookblog lozad" />
                                                <div class="position">
                                                    <img loading="lazy" src="https://res.cloudinary.com/vantagecircle/image/upload/v1597724810/VantageFit/website/vantagefit-bookcover_compress.png" class="bokcover lozad" alt="wellnessprogram" />
                                                </div>
                                            </div>
                                            <div class="col-md-7 col-lg-7 col-xs-12 col-sm-6 text-center title_second">
                                                <span class="sideheading" style={{fontWeight: "normal"}}>Download our Complete Guide on</span> 
                                                <div class="second_heading" style={{color: "#ffffff"}}>Corporate Wellness Program</div> 
                                                <span class="sideheading" style={{fontWeight: "normal"}}>For A Healthier Workplace Experience</span>
                                                <div class="transform ebookbutton">
                                                    <a class="popup-youtube banner_btn white_button button-style" href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/?__hstc=181257784.d5f3d59ee4a3da153080d7b1c2cc5fa9.1585022128913.1589608180387.1589621505475.45&amp;__hssc=181257784.9.1589621505475&amp;__hsfp=1493941965"> 
                                                       <span style={{color: "#ffffff"}}>Free Download </span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        ghostPost: PropTypes.shape({
            codeinjection_styles: PropTypes.object,
            title: PropTypes.string.isRequired,
            html: PropTypes.string.isRequired,
            feature_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`
