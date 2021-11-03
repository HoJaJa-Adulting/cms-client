import styled from "styled-components";
import TopBarComponent from "../TopBar";
import AuthFormComponent from "../AuthForm";

export const TopBar = styled(TopBarComponent)`
  margin-bottom: 62px;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AuthForm = styled(AuthFormComponent)``;
