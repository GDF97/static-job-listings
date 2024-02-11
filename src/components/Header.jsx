import React from "react";
import { HeaderCard } from "../styles/JobCard.style";
import {
  DeleteTag,
  TagJobHeaderWrapper,
  TagJobStyleHeader,
  TemporaryDiv,
} from "../styles/ui/TagJobHeader.style";
import styled from "styled-components";
import { highlightColor } from "../styles/Variables.style";

const ClearButton = styled.button`
  background-color: white;
  border: none;
  color: ${highlightColor};
  cursor: pointer;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = ({ filters, fnClearOneFilter, fnClearFilters }) => {
  return (
    <>
      {filters.length > 0 ? (
        <HeaderCard>
          <TagJobHeaderWrapper>
            {filters.map((filter, index) => (
              <TemporaryDiv key={index}>
                <TagJobStyleHeader>{filter}</TagJobStyleHeader>
                <DeleteTag onClick={() => fnClearOneFilter(filter)}>
                  X
                </DeleteTag>
              </TemporaryDiv>
            ))}
          </TagJobHeaderWrapper>
          <ClearButton onClick={() => fnClearFilters()}>Clear</ClearButton>
        </HeaderCard>
      ) : null}
    </>
  );
};

export default Header;
