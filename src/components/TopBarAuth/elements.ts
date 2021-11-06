import styled from "styled-components";
import AvatarInitial from "components/AvatarInitial";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 18px 28px;
  position: sticky;
  top: 0;
  right: 0;
`;

export const Avatar = styled(AvatarInitial)``;
