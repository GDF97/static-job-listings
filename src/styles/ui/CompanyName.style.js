import styled from "styled-components";
import { highlightColor, veryDarkGray } from "../Variables.style";

export const ComapanyName = styled.h3`
  color: ${highlightColor};
  font-weight: 700;
`;

const CommonStyle = styled.div`
  border-radius: 50px;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  color: white;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewJobStyle = styled(CommonStyle)`
  background-color: ${highlightColor};
`;

export const FeaturedStyle = styled(CommonStyle)`
  background-color: ${veryDarkGray};
`;
