import styled from "styled-components";
import * as C from "../Style/Color";

interface controlBarElement {
  fontSize: number;
}

export const container = styled.div`
  width: 100vw;
  min-width: 400px;
  height: 100vh;

  display: flex;
  align-items: center;
`;

export const controlBar = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2%;
  background-color: ${C.SidebarC};
  color: white;
`;

export const controlBarElement = styled.div`
  width: 100%;
  height: min-content;
  padding: 3% 0% 3% 0%;
  font-weight: 600;
  font-size: 16px;
`;

export const controlBarEditButton = styled.div`
  width: 100%;
  height: min-content;
  padding: 3% 0% 3% 0%;
  font-weight: 600;
  font-size: 22px;
  transition-duration: 0.25s;

  :hover {
    width: 105%;
    height: min-content + 50px;
    z-index: 1;
  }
`;

export const calender = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const calenderMenu = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid black;
`;
