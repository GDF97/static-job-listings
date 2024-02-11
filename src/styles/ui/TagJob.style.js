import styled from "styled-components";
import { highlightColor, tagBackgroundColor } from "../Variables.style";

export const TagJobStyle = styled.button`
  text-align: center;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  font-weight: 700;
  background-color: ${tagBackgroundColor};
  color: ${highlightColor};
  cursor: pointer;

  &:hover {
    background-color: ${highlightColor};
    color: ${tagBackgroundColor};
  }
`;
