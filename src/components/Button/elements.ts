import styled from "styled-components";

type ButtonProps = {
  outlined: boolean;
  large: boolean;
  long: boolean;
};

export const Button = styled.button<ButtonProps>`
  position: relative;
  background: ${(props) => (props.outlined ? "#fff" : "#2196F3")};
  border-color: ${(props) =>
    props.outlined ? "rgba(33, 150, 243, 0.5)" : "#2196F3"};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  color: ${(props) => (props.outlined ? "#2196F3" : "#fff")};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.large ? "15px" : "13px")};
  line-height: ${(props) => (props.large ? "26px" : "22px")};
  letter-spacing: 0.46px;
  text-transform: uppercase;
  padding: ${(props) => (props.large ? "8px 22px" : "4px 10px")};
  cursor: pointer;
  width: ${(props) => (props.long ? "100%" : "auto")};
  ${(props) =>
    !props.outlined &&
    "box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12)"};
`;
