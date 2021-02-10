import React from "react";
import styled from "styled-components";

const UpsellBlock = styled.div`
  background: #f7f7f7;
  padding: 3.5rem 0 6rem;
  text-align: center;

  > div {
    margin: 0 auto;
    max-width: 65rem;
  }
`;

const Upsell = () => {
  return (
    <UpsellBlock>
      <div>
        <h2>Book a demo / Speak to us?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
          justo nec…
        </p>
        <a href="/" className="btn">
          Dolor sit amert
        </a>
      </div>
    </UpsellBlock>
  );
};

export default Upsell;
