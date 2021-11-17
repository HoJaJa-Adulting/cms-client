import styled from "styled-components";

export const Table = styled.table`
  margin-top: 16px;
`;

export const HeadRow = styled.tr`
  height: 48px;
  width: 100%;
  border-top: 1px solid #e3e5e6;
`;

export const HeadText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.1px;
  color: rgba(145, 150, 153, 0.6);
`;

export const BodyRow = styled.tr`
  height: 64px;
  width: 100%;
  border-top: 1px solid #e3e5e6;
`;

type TableDataProps = {
  width: number;
};

export const TableData = styled.td<TableDataProps>`
  width: ${(props) => `${props.width}px`};
`;

export const TableLink = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.44px;
  text-decoration-line: underline;
  color: rgba(0, 0, 0, 0.87);
  cursor: pointer;
`;

export const BodyText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  letter-spacing: 0.44px;
  color: rgba(0, 0, 0, 0.87);
`;
