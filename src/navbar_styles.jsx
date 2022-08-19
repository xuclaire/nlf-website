import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';

export const Navigation = styled.div`
background: #F8F3E3;
    height: 70px;
    display: flex;
    justify-content: space-between;
    z-index:100;
`;
export const Logo = styled(Link)`
    margin-right:auto ;
`;
export const NavLink = styled(Link)`
    color: #3A4520;
    font-family: palatino ;
    font-weight:700;
    font-size: 20px;
    padding: 0 1rem;
    cursor: pointer;
    white-space: nowrap;
    :hover {
        ;
    }
    &.active{
        text-decoration: underline;
    }

`;
export const Navbar = styled.div`
    display: flex;
    align-items: center;
    margin-left:auto;
    
`;
