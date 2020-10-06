import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, Recent } from '../components/common'
import { MetaData } from '../components/common/meta'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'
import './../styles/post.amp.css'

const Post = (postData) => {
    const { data, location } = postData
    const post = data.ghostPost
    console.log(data)
    
    return (
        <>
            <MetaData
                data={data}
                location={location}
                amp={postData.pageContext.amp}
                type="article"
            />
            {!postData.pageContext.amp && 
            <Helmet>
                <style type="text/css">{`${post.codeinjection_styles}`}</style>
            </Helmet> }
            <header class="text-center content">
                <Link to="/" className="navbar-brand sticky_logo">
                    <amp-img width="220" height="45" alt="Vantage Fit" className="stick_logo" src="https://res.cloudinary.com/vantagecircle/image/upload/v1600424607/VantageFit/website/vantagefit-logo-220-compress-2.png" />
                </Link>
            </header>
            <main className="content" role="main">
                <div className="container">
                    <article className="content">
                        
                        <header className="post-header">
                            <h1 className="content-title">{ post.title }</h1>
                            
                            <div className="post-full-published-date">
                                { post.created_at_pretty }
                            </div>
                        </header>
                        { post.feature_image ?
                            <figure className="amp-img-container">
                                <amp-img src={ post.feature_image } className="contain" layout="responsive" alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            

                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                        <section class="cta-banner">
                            <a href="https://go.vantagefit.io/free-ebook-corporate-wellness-program/">
                                <amp-img alt="Vantage Fit ebook download" layout="responsive" src="https://res.cloudinary.com/vantagecircle/image/upload/v1601989071/VantageFit/website/vantagefit-ebook.png"/>
                                <img decoding="async" alt="Vantage Fit ebook download"  src="https://res.cloudinary.com/vantagecircle/image/upload/v1601989071/VantageFit/website/vantagefit-ebook.png" />
                            </a>
                        </section>
                    </article>
                </div>
            </main>
            <footer className="content page-footer">
                <Link to="/" className="site-icon i-amphtml-element i-amphtml-layout-fixed i-amphtml-layout-size-defined i-amphtml-layout">
                    <amp-img width="50" height="50" alt="Vantage Fit" className="stick_logo" src="https://www.vantagefit.io/content/images/2020/02/vantagefit-icon.png" />
                </Link>
                <h3>Vantage Fit - A Complete Solution To Your Corporate Wellness Program</h3>
                <p>Take your corporate wellness program to a whole new level with Vantage Fit-an exclusive employee wellness app with all the features to help your nurture a healthy and engaged workforce</p>
                <p><a href="https://www.vantagefit.io">Go to Homepage</a></p>
            </footer>      
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
    amp: PropTypes.bool,
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    }
`