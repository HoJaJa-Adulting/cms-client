import styled from "styled-components";
import TopBarComponent from "components/TopBarAuth";
import SideBarComponent from "components/SideBar";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SideBar = styled(SideBarComponent)``;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TopBar = styled(TopBarComponent)`
  margin-bottom: 64px;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 80px;
`;
