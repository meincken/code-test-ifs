import React from "react";
import styled from "styled-components";
import { CTAButton, H2 } from "../../shared/ui-kit";

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
        <H2 title={`Book a demo / Speak to us?`} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
          justo nec…
        </p>
        <CTAButton to={`/`} title={`Dolor sit amert`} />
      </div>
    </UpsellBlock>
  );
};

export default Upsell;
