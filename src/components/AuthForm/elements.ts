import styled from "styled-components";
import ButtonComponent from "../Button";
import Heading1 from "../Heading1";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 342px;
`;

export const Title = styled(Heading1)`
  margin-bottom: 27px;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 32px;
  background: #f6f6f6;
  border: 1px solid #e8e8e8;
  box-sizing: border-box;
  border-radius: 8px;
  height: 50px;
  padding: 16px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Button = styled(ButtonComponent)``;
