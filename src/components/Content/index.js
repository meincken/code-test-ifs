import React from "react";
import styled from "styled-components";
import { Content } from "../../shared/ui-kit";

const Container = styled.section`
  background: #ededed;
  padding: 3.4rem 0 11rem;

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;
    max-width: 117rem;
    margin: 0 auto;

    h2 {
      grid-column: span 3;
      text-align: center;
    }
  }
`;

const Articles = () => {
  return (
    <Container>
      <div>
        <h2>
          <strong>This is IFS Cloud:</strong> the functionality you need, when
          you need it:
        </h2>
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
        <Content
          title={`title`}
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
      nulla in metus semper imperdiet vel eget odio. Phasellus ultricies
      justo nec lobortis facilisis. Ut eget mauris sollicitudin ex faucibus
      aliquam…`}
        />
      </div>
    </Container>
  );
};

export default Articles;
