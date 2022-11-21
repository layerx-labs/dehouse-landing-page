import tw from "../tw";
import styled from "styled-components";
const ThemeToggleButtonStyled = styled.button`
  border: 0;
  padding: 0;
  &:after {
    top: 13%;
    left: 9%;
    content: "";
  }
`;

const ThemeToggleButton = tw(
  ThemeToggleButtonStyled
)`bg-c2 hover:bg-c2-l dark:after:border-c2 dark:after:bg-c4-l dark:hover:border dark:bg-c3 dark:hover:bg-c3-l peer h-7 w-12 rounded-full peer-checked:after:translate-x-full peer-focus:outline-none after:absolute after:h-5 after:w-5 after:rounded-full after:border after:bg-white after:text-center after:transition-all`;

const ThemeToggleInput = tw.input`peer sr-only `;

const ThemeToggleComponentStyle = styled.label`
  content: "";
  &:after {
    content: "";
  }
`;
const ThemeToggleComponent = tw(
  ThemeToggleComponentStyle
)`relative inline-flex cursor-pointer items-center`;

export { ThemeToggleComponent, ThemeToggleButton, ThemeToggleInput };
