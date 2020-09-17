import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import { Layout, PostCard, PricingPage } from '../components/common'
import { MetaData } from '../components/common/meta'

/**
* Single page (/:slug)
*
* This file renders a single page and loads all the content.
*
*/
const Page = ({ data, location }) => {
    console.log(data)
    console.log(location.pathname)

    const posts = data.allGhostPost.edges
    const page = data.ghostPage

    return (
        <>
            <MetaData
                data={data.ghostPage}
                location={location}
                type="website"
            />
            <Helmet>
                <style type="text/css">{`${page.codeinjection_styles}`}</style>
            </Helmet>
            <Layout>
                <div className="elementor">
                    <div className="elementor-inner">
                        <div className="elementor-section-wrap">
                            <section className="breadcrumb_area breadcrumb_area_two vc-btn-gradient-color vc-btn-gradient-general"> 
                                <img width="570" className="breadcrumb_shap hidden-xs lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_500/v1580904957/VantageFit/website/lines.png" alt="lines" />
                                <div className="marketinglanding">
                                    <img width="300" className="breadcrumb_pulse hidden-xs lozad" src="https://res.cloudinary.com/vantagecircle/image/upload/w_300/v1580904957/VantageFit/website/heart-lines.png" alt="pulse" />
                                </div>
                                
                                <div className="container">
                                    <div className="breadcrumb_content text-center main_title">
                                        <h1> {page.title}</h1>
                                        <p className="page_excerpt">{page.excerpt}</p>
                                    </div>
                                </div> 
                            </section>
                        </div>
                        {location.pathname !== '/resources/' || location.pathname !== '/resources' ? 
                            <section
                                className="content-body load-external-scripts"
                                dangerouslySetInnerHTML={{ __html: page.html }}
                            /> : null }
                    </div>
                </div>
                {location.pathname === '/resources/' || location.pathname === '/resources' ? 
                    <div className="main-content" >
                        <section>
                            <div className="container custom-container">
                                <div className="row">
                                    {posts.map(({ node }) => (
                                        <PostCard key={node.id} post={node} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div> : null 
                }
                {location.pathname === '/pricing/' || location.pathname === '/pricing' ?
                    <PricingPage/>: null 
                }

            </Layout>
        </>
    )
}

Page.propTypes = {
    // data: PropTypes.shape({
    //     ghostPage: PropTypes.shape({
    //         codeinjection_styles: PropTypes.object,
    //         title: PropTypes.string.isRequired,
    //         html: PropTypes.string.isRequired,
    //         feature_image: PropTypes.string,
    //     }).isRequired,
    // }).isRequired,
    // location: PropTypes.object.isRequired,
}

export default Page

export const postQuery = graphql`
    query($slug: String!) {
        ghostPage(slug: { eq: $slug }) {
            ...GhostPageFields
        }
        allGhostPost(
            sort: { order: DESC, fields: [published_at] },
            filter: {tags: {elemMatch: {name: {eq: "#Resources"}}}},
        ) {
            edges {
                node {
                ...GhostPostFields
                }
            }
        }
    }
`
