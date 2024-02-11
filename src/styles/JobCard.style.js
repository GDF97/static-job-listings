import styled from "styled-components";

export const JobCard = styled.div`
  width: 100%;
  height: 175px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 6px 10px 0px hsl(180deg 29% 50% / 43%);
  padding: 2rem 3rem;
  border-radius: 4px;
`;

export const HeaderCard = styled(JobCard)`
  height: fit-content;
  padding: 1.5rem 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;
