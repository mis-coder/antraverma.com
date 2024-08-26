import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface ToggleThemeProps {
  turnDarkOn: boolean;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ turnDarkOn }) => {
  return <button>{turnDarkOn ? <FaMoon /> : <FaSun />}</button>;
};

export default ToggleTheme;
