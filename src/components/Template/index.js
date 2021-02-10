import React from "react";
import "normalize.css";
import { GlobalStyle } from "../../shared/global";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/";
import Navbar from "../../components/Header/";
import useSiteMetadata from "./SiteMetadata";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default TemplateWrapper;
