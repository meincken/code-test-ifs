import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  background: #333;
  padding: 2rem 0 2.2rem;

  a {
    background: #4b4b4b;
    border-radius: 0.3rem;
    color: #fff;
    margin-right: 0.5rem;
    padding: 0.5rem 0.8rem;
    text-decoration: none;
  }
`;

const Container = styled.div`
  max-width: 117rem;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterBlock>
      <Container>
        <a href="/">Privacy, Cookies & GDPR</a>
        <a href="/">Legal Notice</a>
        <a href="/">About IFS</a>
        <a href="/">Newsroom</a>
      </Container>
    </FooterBlock>
  );
};

export default Footer;
