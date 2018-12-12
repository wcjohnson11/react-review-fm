import React from "react";
import { Link } from "@reach/router";
import styled from '@emotion/styled';
import colors from './colors';

const Container = styled("header")`
    background-color: ${colors.dark};
    position: sticky;
    top: 0;
    z-index: 10;
`;

const NavBar = () => (
  <Container>
    <Link to="/">Adopt Me!</Link>
    <Link to="/search-params">
      <span aria-label="search" role="img">
        🔍
      </span>
    </Link>
  </Container>
);

export default NavBar;
