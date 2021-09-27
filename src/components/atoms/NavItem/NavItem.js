import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItemStyled = styled(NavLink)`
color: ${(props) => props.theme.titleColor};
background: ${(props) => props.theme.pageBackground };
border: none;
font-size: bold;
width: 33,3333%;

&:hover,
&:focus,
&.active {
  color: black;
  font-weight:bold;
  outline: none;
  box-shadow: none;
  color: ${(props) => props.theme.titleColor};
}
`;

function NavItem({name,to,filterTasks}) {
  return (
    <NavItemStyled
      exact
      activeClassName="active"
      className="navbar-brand"
      name={name}
      onClick={(e) => filterTasks(e.target.name)}
      to={to}
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </NavItemStyled>
  );
}

export default NavItem;
