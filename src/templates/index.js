import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCardHome, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import GhostContentAPI from '@tryghost/content-api'
/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/

const Index = ({ data, location, pageContext }) => {
    console.log(data)
    const posts = data.allGhostPost.edges
    // api.posts
    //     .browse({ limit: 3, include: `tags,authors` })
    //     .then((post) => {
    //         this.posts = post
    //         // posts.forEach((post) => {
    //         //     console.log(post)
    //         // })
    //     })
    //     .catch((err) => {
    //         console.error(err)
    //     })

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                {/* <div className="container">
                    <section className="post-feed"> */}
                {posts.map(({ node }) => (
                    <PostCardHome key={node.id} post={node} />
                ))}
                {/* </section>
                    <Pagination pageContext={pageContext} />
                </div> */}
            </Layout>
        </>
    )
}

Index.propTypes = {
    data: PropTypes.shape({
        allGhostPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Index

const api = new GhostContentAPI({
    url: `https://demo.ghost.io`,
    key: `22444f78447824223cefc48062`,
    version: `v3`,
})

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
        sort: { order: DESC, fields: [published_at] },
        limit: $limit,
        skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`
