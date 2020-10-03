import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, Recent } from '../components/common'
import { MetaData } from '../components/common/meta'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const Post = (postData) => {
    const { data, location } = postData
    const post = data.ghostPost
    
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
                        { post.feature_image ?
                            <figure className="amp-img-container">
                                <amp-img src={ post.feature_image } class="contain" layout="fill" alt={ post.title } />
                            </figure> : null }
                        <section className="post-full-content">
                            <h1 className="content-title">{post.title}</h1>

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