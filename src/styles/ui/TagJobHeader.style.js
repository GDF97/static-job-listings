import styled from "styled-components";
import { highlightColor } from "../Variables.style";
import { TagJobStyle } from "./TagJob.style";

export const TagJobHeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TagJobStyleHeader = styled(TagJobStyle)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  height: 100%;
  pointer-events: none;
`;

export const DeleteTag = styled.button`
  padding: 0.5rem 0.75rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${highlightColor};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: hsl(180, 14%, 20%);
  }
`;

export const TemporaryDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
