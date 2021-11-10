import styled from "styled-components";
import LogoAndNameComponent from "components/LogoAndName";

export const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 250px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
  background: #546e7a;
  padding-top: 32px;
`;

export const LogoAndName = styled(LogoAndNameComponent)``;

export const List = styled.ul`
  margin-top: 54px;
  width: 100%;
  list-style: none;
  padding: 0;
`;

type ListItemProps = {
  selected: boolean;
};

export const ListItem = styled.li<ListItemProps>`
  width: 100%;
  height: 60px;
  padding-left: 56px;
  background: ${(props) => (props.selected ? "#455A64" : "transparent")};
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
  margin-bottom: 22px;
  &:hover {
    background: #455a64;
    font-weight: bold;
  }
`;
