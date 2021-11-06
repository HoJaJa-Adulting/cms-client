import styled from "styled-components";
import AvatarInitial from "components/AvatarInitial";
import DropDownItemComponent from "components/DropDownItem";

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
  background: #fff;
  border: 1px solid #eceff1;
  z-index: 2;
`;

export const Avatar = styled(AvatarInitial)``;

type DropDownProps = {
  $display: boolean;
};

export const DropDown = styled.div<DropDownProps>`
  display: flex;
  flex-direction: column;
  width: 360px;
  background: #fff;
  border: 1px solid #eceff1;
  position: absolute;
  top: ${(props) => (props.$display ? "81px" : "-100px")};
  transition: top 0.2s ease-in;
  right: 19px;
  padding: 8px 0;
  z-index: 1;
`;

export const DropDownItem = styled(DropDownItemComponent)``;
