import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import IndexBlogRoll from '../components/IndexBlogRoll';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Contact from '../pages/contact'
import FadeInSection from '../components/FadeInSection';
import Sketch from '../components/sketch'
import loadable from '@loadable/component';
const LoadableP5 = loadable(() => import("@p5-wrapper/react"));

const projects = [{
  name: 'emoji575',
  src: '/img/images/screenshots/emoji575.png',
  website: 'https://www.emoji575.zaiz.ai',
  },
  {
  name: 'hummingbird',
  src: '/img/images/screenshots/hummingbird.png',
  website: 'https://www.hummingbird.zaiz.ai',
  },
  {
  name: 'tajweed',
  src: '/img/images/screenshots/tajweed.png',
  website: 'https://www.tajweed.zaiz.ai',
  }
]

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  socials,
  description,
}) => {
  return (
      <section className='section section--gradient'>
        <div className='container'>
          <div className='section'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='content'>
                    <div className='tile is-ancestor'>
                      <div className='tile is-child portrait'>
                        <PreviewCompatibleImage imageInfo={image} />
                      </div>
                      <div className='tile is-child is-flex is-flex-direction-column is-justify-content-center index'>
                        <h1
                          className='title'
                        >
                          {heading}
                        </h1>
                        <h2 className='subtitle'>{subheading}</h2>
                        <h3 className='description'>{description}</h3>
                        <a href={socials.insta} className="social is-size-4">insta</a>{' '}
                        <a href={socials.linkedin} className="social is-size-4">linkedin</a>{' '}
                        <a href={socials.github} className="social is-size-4">github</a>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <hr/>
        <FadeInSection>
        <div className='column'>
          <IndexBlogRoll />
          <div className='column has-text-centered'>
            <Link className='btn' to='/poems'>
              see more poems
            </Link>
          </div>
        </div>
        <hr/>
        </FadeInSection>
        <FadeInSection>
        <div className='column'>
          <div className="projects">
          {projects.map(x => {
            return <div key={x.name} className="project">
            <a href={x.website}><img src={x.src} alt={x.name}/>
            <p>
            {x.name}
          </p></a>
          </div>})}
          <div className="project">
          <div className="sketch">
          <LoadableP5 sketch={Sketch}/>
          </div>
          <span>dreaming up more plans!<br/>sketch in the empty space</span>
          </div>
          </div>
          <div className='column has-text-centered'>
            <Link className='btn' to='/projects'>
              see more projects
            </Link>
          </div>
      </div>
      <hr/>
      </FadeInSection>
      <FadeInSection>
      <div className='column has-text-centered'>
        <img src="/img/images/contact.png" alt="contact" className="pen"/>
        <h3 className="is-size-4 is-bold-light">
          send me a note 
        </h3>
      </div>
      <Contact />
      </FadeInSection>
      </section>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  subheading: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.object,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        description={frontmatter.description}
        socials={frontmatter.socials}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        image {
          alt
          image {
            childImageSharp {
              gatsbyImageData(
                width: 275
                quality: 92
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
        heading
        subheading
        description
        socials {
          insta
          linkedin
          github
        }
      }
    }
  }
`;
