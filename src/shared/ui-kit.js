import React from "react";
import { Link } from "gatsby";
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

const PrimaryBtn = styled.button`
  background-color: #7f7f7f;
  border: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  text-decoration: none;

  + button {
    margin-left: 2rem;
  }
`;

const SecondaryBtn = styled(PrimaryBtn)`
  background-color: #9d9d9d;
`;

const CTABtn = styled(PrimaryBtn)`
  background-color: #ff5659;
  padding: 2rem 4rem;
`;

export const PrimaryButton = ({ title, to }) => (
  <PrimaryBtn to={to}>{title} ></PrimaryBtn>
);

export const SecondaryButton = ({ title, to }) => (
  <SecondaryBtn to={to}>{title} ></SecondaryBtn>
);

export const CTAButton = ({ title, to }) => <CTABtn to={to}>{title} ></CTABtn>;

const H2style = styled.h2`
  color: #707070;
  font-size: 5rem;
`;

export const H2 = ({ title }) => <H2style>{title}</H2style>;
