import { TagJobStyle } from "../../styles/ui/TagJob.style";

const TagJob = ({ tagName, fnJobFilter }) => {
  return (
    <TagJobStyle
      value={tagName}
      onClick={(e) => {
        fnJobFilter(e.currentTarget.value);
      }}
    >
      {tagName}
    </TagJobStyle>
  );
};

export default TagJob;
