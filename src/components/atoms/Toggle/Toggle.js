import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const ToggleButton = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.pageBackground};
    &:focus {
      outline: none;
    }
    transition: all .35s ease;

    svg{
      color: ${props => props.theme.toggleColor};
    }
`;

function Toggle(props) {

  const { changeTheme, theme } = props

  const icon = theme === "light" ? <HiMoon size={24} /> : <CgSun size={24} />;

  return (
    <ToggleButton onClick={changeTheme}>
      {icon}
    </ToggleButton>
  );
}

export default Toggle;