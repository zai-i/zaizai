import React from "react";
import Layout from "../components/Layout";

import FadeInSection from "../components/FadeInSection";

// eslint-disable-next-line
const NotFoundPage = () => {
  return (
    <Layout>
      <FadeInSection>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h1 className="title is-size-3 is-bold-light">
                    {title}
                  </h1>
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </Layout>
  );
};

export default NotFoundPage;