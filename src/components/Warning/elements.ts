import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  height: 46px;
  width: fit-content;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    #ff9800;
  border-radius: 4px;
`;

export const Text = styled.p`
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.15px;
  color: rgba(0, 0, 0, 0.6);
  margin: 0 8px;
  padding-top: 3px;
`;

export const Action = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  padding: 4px 5px;
  cursor: pointer;
`;
