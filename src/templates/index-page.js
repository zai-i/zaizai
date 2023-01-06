import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  heading,
  subheading,
  socials,
  description,
}) => {

  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content">
                  <div className="tile is-ancestor">
                    <div className="tile is-child is-4 portrait">
                        <PreviewCompatibleImage imageInfo={image}/>
                      </div>
                      <div className="tile is-child is-flex is-flex-direction-column is-justify-content-center">
                        <h1 className="title" style={{fontFamily: 'Leckerli One'}}>{heading}</h1>
                        <h2 className="subtitle">{subheading}</h2>
                        <h3 className="description">{description}</h3>

                        <a href={socials.insta}>insta</a> <a href={socials.linkedin}>linkedin</a>
                      </div>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold">
                      Latest content
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/writing">
                        more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
        heading
        subheading
        description
        socials {
          insta
          linkedin
        }
      }
    }
  }
`;
