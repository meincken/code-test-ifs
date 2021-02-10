import React from "react";
import styled from "styled-components";

const ContentBlock = styled.article`
  background: #fff;
  padding: 2.5rem 1.7rem;
  text-align: center;
`;

export const Content = ({ title, content }) => (
  <ContentBlock>
    <h2>{title}</h2>
    <p>{content}</p>
  </ContentBlock>
);
