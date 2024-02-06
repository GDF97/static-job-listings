import { TagJobStyle } from "../../styles/ui/TagJob.style";

const TagJob = ({ tagName }) => {
  return (
    <TagJobStyle
      value={tagName}
      onClick={(e) => console.log(e.currentTarget.value)}
    >
      {tagName}
    </TagJobStyle>
  );
};

export default TagJob;
