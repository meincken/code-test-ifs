import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderBlock = styled.header`
  h1 {
    padding: 3rem 4rem 3.8rem;
  }
`;

const Container = styled.div`
  background: #f2f2f2;

  nav {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 117rem;
    padding: 3.8rem 0 2.1rem;

    a {
      color: #707070;
      margin-left: 3.5rem;
      text-decoration: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderBlock>
      <h1>IFS Cloud</h1>
      <Container>
        <nav>
          <img
            alt=""
            width="76px"
            height="76px"
            src="data:image/png;base64,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"
          />
          <Link to="/">Industries</Link>
          <Link to="/">Solutions</Link>
          <Link to="/">Customers</Link>
          <Link to="/">Resources</Link>
          <Link to="/">About</Link>
        </nav>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
