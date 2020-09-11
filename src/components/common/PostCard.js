import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { Tags } from '@tryghost/helpers-gatsby'
import { readingTime as readingTimeHelper } from '@tryghost/helpers'

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`
    const readingTime = readingTimeHelper(post)

    return (
        <div className="col-lg-4 col-md-12 col-xs-12 col-sm-12">
            <article className="post-card post tag-resources ">
                <div className="img-holder">
                    <a className="post-card-image-link" href={url}>
                        <img className="post-card-image img-responsive" src={ post.feature_image } alt="A Complete Guide To Corporate Wellness Program"/>
                    </a>
                </div>
                <div className="post-card-content">
                    <a className="post-card-content-link" href={url}>
                        <header className="post-card-header">
                            <h2 className="post-card-title"> { post.title}</h2>
                        </header>
                    </a>
                    <section className="post-card-excerpt">
                        <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
                    </section>
                    <p className="readmorepostcard"><a href={url} className="vc_active">Read More <span className="fa fa-long-arrow-right" ></span></a></p>
                </div>
            </article>
        </div>
        // <Link to={url} className="post-card">
        //     <header className="post-card-header">
        //         {post.feature_image &&
        //             <div className="post-card-image" style={{
        //                 backgroundImage: `url(${post.feature_image})` ,
        //             }}></div>}
        //         {post.tags && <div className="post-card-tags"> <Tags post={post} visibility="public" autolink={false} /></div>}
        //         {post.featured && <span>Featured</span>}
        //         <h2 className="post-card-title">{post.title}</h2>
        //     </header>
        //     <section className="post-card-excerpt">{post.excerpt}</section>
        //     <footer className="post-card-footer">
        //         <div className="post-card-footer-left">
        //             <div className="post-card-avatar">
        //                 {post.primary_author.profile_image ?
        //                     <img className="author-profile-image" src={post.primary_author.profile_image} alt={post.primary_author.name}/> :
        //                     <img className="default-avatar" src="/images/icons/avatar.svg" alt={post.primary_author.name}/>
        //                 }
        //             </div>
        //             <span>{ post.primary_author.name }</span>
        //         </div>
        //         <div className="post-card-footer-right">
        //             <div>{readingTime}</div>
        //         </div>
        //     </footer>
        // </Link>
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
