import * as React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}safari-pinned-tab.svg`}
          color="#e899b1"
        />
        <link rel="manifest" href={`${withPrefix("/")}site.webmanifest`}/>
        <meta name="msapplication-TileColor" content="#e899b1"/>
        <meta name="theme-color" content="#e899b1" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
        <Navbar />
        <div>{children}</div>
        </div>
  );
};

export default TemplateWrapper;
