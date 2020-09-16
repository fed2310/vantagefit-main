import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    // const url = `/${post.slug}/`
    const url = `/resources/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
            <article className="post-card post tag-resources ">
                <div className="img-holder">
                    <Link className="post-card-image-link" to={url}>
                        <img className="post-card-image img-responsive" src={ post.feature_image } alt="A Complete Guide To Corporate Wellness Program"/>
                    </Link>
                </div>
                <div className="post-card-content">
                    <Link className="post-card-content-link" to={url}>
                        <header className="post-card-header">
                            <h2 className="post-card-title"> { post.title}</h2>
                        </header>
                    </Link>
                    <section className="post-card-excerpt">
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                    </section>
                    <p className="readmorepostcard">
                        <Link to={url} className="vc_active">
                            Read More 
                            <span className="fa fa-long-arrow-right"></span>
                        </Link>
                    </p>
                </div>
            </article>
        </div>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
        primary_author: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profile_image: PropTypes.string,
        }).isRequired,
    }).isRequired,
}

export default PostCard
