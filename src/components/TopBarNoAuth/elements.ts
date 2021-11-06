import styled from "styled-components";
import ButtonComponent from "components/Button";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 36px 66px 36px 39px;
  position: sticky;
  top: 0;
  left: 0;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 34px;
  line-height: 44px;
  letter-spacing: 0.06em;
  color: #263238;
  margin: 0;
`;

export const Button = styled(ButtonComponent)``;
