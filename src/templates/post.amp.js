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
            <Layout amp={postData.pageContext.amp}>
                <div className="container">
                    <article className="content">
                        <Link to="/" className="navbar-brand sticky_logo">
                            <img width="220" height="45" alt="Vantage Circle" className="stick_logo" src="https://res.cloudinary.com/vantagecircle/image/upload/v1600424607/VantageFit/website/vantagefit-logo-220-compress-2.png" />
                        </Link>
                        <header className="post-header">
                            <h1 className="content-title">{ post.title }</h1>
                            
                            <div className="post-full-published-date">
                                { post.created_at_pretty }
                            </div>
                        </header>
                        { post.feature_image ?
                            <figure className="amp-img-container">
                                <amp-img src={ post.feature_image } className="contain" layout="fill" alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            

                            {/* The main post content */ }
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: post.html }}
                            />
                        </section>
                    </article>
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