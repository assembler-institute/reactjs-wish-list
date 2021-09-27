import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavItemStyled = styled(NavLink)`
color: #A4A4A4;
background: white;
border: none;
font-size: bold;
width: 33,3333%;

&:hover,
&:focus,
&.active {
  color: black;
  background-color: white;
  outline: none;
  box-shadow: none;
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
