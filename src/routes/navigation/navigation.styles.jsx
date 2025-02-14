/** @format */

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 81px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  flex-wrap: wrap;

  @media screen and (max-width: 800px) {
    height: 40px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;
export const CustomSearchBar = styled.div`
  width: 55%;
  @media screen and (max-width: 800px) {
    width: 100vw;
    order: 3;
  }
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 1.2rem;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
