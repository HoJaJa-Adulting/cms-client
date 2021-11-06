import styled from "styled-components";

type ButtonProps = {};

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 12px 16px;
  text-align: left;
`;

export const ButtonText = styled.p`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.87);
`;
