import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const JumboBlock = styled.div`
  background-image: url(https://via.placeholder.com/2000x580);
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 117rem) 1fr;
  grid-template-rows: 5rem 20rem 1fr;
  min-height: 83rem;

  h2 {
    background-color: #00d99e;
    color: #fff;
    grid-column-start: span 2;
    float: left;
    text-transform: uppercase;
  }

  .sub-block {
    grid-column: 2;

    a {
      color: green;
      clear: left;
    }
  }

  h3 {
    background-color: #fff;
    float: left;
    padding: 2rem;
  }

  > section {
    background: #fff;
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
    grid-column: 2;
    margin: 0 auto 0;
    max-width: 117rem;
    padding: 5rem;

    > div {
      img {
        width: 100%;
      }
    }
  }
`;

const Jumbotron = () => {
  return (
    <JumboBlock>
      <h2>IFS Cloud Functionality</h2>
      <div className={`sub-block`}>
        <h3>Fully integrated. Flexibly deployable.</h3>
        <Link to={`/`} className={`btn btn-primary`}>
          Tristique eu urna eget
        </Link>
        <Link to={`/`} className={`btn btn-secondary`}>
          Tristique eu urna eget
        </Link>
      </div>
      <section>
        <div>
          <p>
            IFS Cloud brings together our market-leading Service Management,
            Enterprise Resource Planning and Enterprise Asset Management and
            capabilities within a single product, on a single platform.
          </p>
          <p>
            From Financials and Human Capital Management for multi-market
            businesses, to powerful Manufacturing and Service solutions, IFS
            Cloud capabilities are embedded in the software and fully
            integrated, with a single user experience. Functionality looks and
            works in the same way across all solutions, and data is shared
            seamlessly so the information you use for planning and
            decision-making is always reliable and up to date.
          </p>
        </div>
        <div>
          <img src="https://via.placeholder.com/515x264" alt="" />
        </div>
      </section>
    </JumboBlock>
  );
};

export default Jumbotron;
