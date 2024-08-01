import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import FadeInSection from './FadeInSection';
import image from '../img/ecstaticmotion.jpg';

class BlogRollTemplate extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
  
    return (
      <div className='columns is-multiline blog-roll'>
        <FadeInSection>
        <a href='https://marblepoetry.com/product/ecstatic-motion-zainab-ismail/'>
              <figure>
                <img className="is-rounded" src={image} alt="Ecstatic Motion published by Marble Poetry 2020" />
              </figure>
          </a>
        </FadeInSection>
        <FadeInSection>
        <div className="reviews">
        <p className="title">“Zainab Ismail’s lush and startling debut explores her tricultural heritage, what she dubs ‘the taproot tapestry’ that ‘wove the heavens in her mouth.’ She may not be able to speak her home in Gujarati harmonies or Arabic auxiliaries, but she is firmly planted in poetry’s formal earth.” Cherry Smyth</p>
        <p className="title">“Reading the unghosting of a new poetic tongue is an ecstatic experience! ‘Lotuses of language’ do ‘float along’ within this collection and I defy anyone not to be moved by their intricacy and beauty.” Emily Critchley</p>
        <p className="title">“<em>Ecstatic Motion</em> is both endearing and emotive, captured vividly in sparkling, intricate language as rich and captivating as Islamic art.” <a href="https://www.thelondoneconomic.com/entertainment/books/must-reads-of-the-week-spotlight-on-marble-poetry-210730/">Timothy Arden, <em>The London Economic</em></a></p>
        </div>
        </FadeInSection>
        {posts &&
          posts.map(({ node: post }) => (
            <FadeInSection isTiled key={post.ids}>
              <div className='is-parent column is-12' key={post.id}>
                <article className='blog-list-item tile is-child box notification'>
                  <header>
                    <p className='post-meta'>
                      <Link
                        className='title has-text-primary is-size-4'
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    </p>
                  </header>
                  <p>
                    {post.excerpt}
                    <br />
                    <br />
                    {post.frontmatter.publication ? (
                      <a
                        className='publication-notes'
                        href={post.frontmatter.publicationHref}
                        target='_blank'
                        rel='noreferrer'
                      >
                        {post.frontmatter.publication}
                      </a>
                    ) : null}
                    <br />
                    <br />
                    <Link className='button' to={post.fields.slug}>
                      read
                    </Link>
                  </p>
                </article>
              </div>
            </FadeInSection>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
