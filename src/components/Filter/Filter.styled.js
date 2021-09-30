import { NavLink } from "react-router-dom";
import styled from "styled-components";

const FilterStyled = styled.nav`
	display: flex;
	justify-content: center;
	gap: 1rem;
`;

const FilterLink = styled(NavLink)`
	&:hover {
		color: #4094C0;
	}
`;

export { FilterStyled, FilterLink };