import styled from "styled-components";
import { highlightColor, veryDarkGray } from "./Variables.style";

export const PositionJob = styled.h2`
  color: ${veryDarkGray};

  &:hover {
    cursor: pointer;
    color: ${highlightColor};
  }
`;
