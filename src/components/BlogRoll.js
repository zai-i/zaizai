import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import FadeInSection from './FadeInSection'

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    
    return (
      <div className="columns is-multiline blog-roll">
        {posts &&
          posts.map(({ node: post }) => (
            <FadeInSection isTiled>
            <div className="is-parent column is-12" key={post.id}>
              <article
                className="blog-list-item tile is-child box notification"
              >
                <header>
                  <p className="post-meta">
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                  </p>
                </header>
                <p>
                  {post.excerpt}
                  <br/>
                  <br/>              
                  {post.frontmatter.publication ?
                  <a className="publication-notes" href={post.frontmatter.publicationHref} target="_blank" rel="noreferrer">
                    {post.frontmatter.publication}</a> : null
                }
                  <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    read
                  </Link>
                </p>
              </article>
            </div>

        </FadeInSection>
          ))}
      </div>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function BlogRoll() {
  return (
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 175)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  publication
                  publicationHref
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  );
}
