import styled from "styled-components";

import { backgroundColor } from "../Variables.style";

export const BodyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColor};
`;
