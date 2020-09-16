import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCardHome, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'
import GhostContentAPI from '@tryghost/content-api'
import { Topthree } from '../components/common'
/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/

const Index = ({ data, location, pageContext, threePost }) => {
    console.log(location)
    const posts = data.allGhostPost.edges

    return (
        <>
            <MetaData location={location} />
            <Layout isHome={true}>
                {location.pathname === `/` ? 
                    <Topthree id="1" />
                    :
                    null }
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
    threePost: PropTypes.object,
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
