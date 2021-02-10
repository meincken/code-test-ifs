import * as React from "react";
import Template from "../components/Template/";
import Jumbotron from "../components/Jumbotron/";
import Content from "../components/Content";
import Upsell from "../components/Upsell/";

// markup
const IndexPage = ({ children }) => {
  return (
    <Template>
      <Jumbotron />
      <Content />
      <Upsell />
    </Template>
  );
};

export default IndexPage;
