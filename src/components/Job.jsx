import { Image } from "../styles/Image.style";
import { JobCard } from "../styles/JobCard.style";
import {
  CompanyNameWrapper,
  CompanyWrapper,
  JobInfoWrapper,
  TagWrapper,
} from "../styles/wrappers/CommonsWrapper.style";
import { CompanyInfoWrapper } from "../styles/wrappers/CompanyNameWrapper.style";
import { ComapanyName } from "../styles/ui/CompanyName.style";
import TagJob from "./ui/TagJob";
import NewJob from "./ui/NewJob";
import FeaturedJob from "./ui/FeaturedJob";
import { PositionJob } from "../styles/PositionJob.style";
import { Contract, Location, PostedAt } from "../styles/ui/InfoJob.style";

import photosnap from "../assets/images/photosnap.svg";
import manage from "../assets/images/manage.svg";
import account from "../assets/images/account.svg";
import myhome from "../assets/images/myhome.svg";
import loopStudios from "../assets/images/loop-studios.svg";
import faceit from "../assets/images/faceit.svg";
import shortly from "../assets/images/shortly.svg";
import insure from "../assets/images/insure.svg";
import eyecamCo from "../assets/images/eyecam-co.svg";
import theAirFilterCompany from "../assets/images/the-air-filter-company.svg";

const imageMap = {
  "../assets/images/photosnap.svg": photosnap,
  "../assets/images/manage.svg": manage,
  "../assets/images/account.svg": account,
  "../assets/images/myhome.svg": myhome,
  "../assets/images/loop-studios.svg": loopStudios,
  "../assets/images/faceit.svg": faceit,
  "../assets/images/shortly.svg": shortly,
  "../assets/images/insure.svg": insure,
  "../assets/images/eyecam-co.svg": eyecamCo,
  "../assets/images/the-air-filter-company.svg": theAirFilterCompany,
};

const Job = ({
  id,
  company,
  logo,
  newJob,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  fnSetJob,
}) => {
  const logoImage = imageMap[logo];

  return (
    <JobCard>
      <CompanyWrapper>
        <Image src={logoImage} />
        <CompanyInfoWrapper>
          <CompanyNameWrapper>
            <ComapanyName>{company}</ComapanyName>
            {newJob && <NewJob />}
            {featured && <FeaturedJob />}
          </CompanyNameWrapper>
          <PositionJob>{position}</PositionJob>
          <JobInfoWrapper>
            <PostedAt>{postedAt} </PostedAt>
            <Contract>{contract}</Contract>
            <Location>{location}</Location>
          </JobInfoWrapper>
        </CompanyInfoWrapper>
      </CompanyWrapper>
      <TagWrapper>
        <TagJob tagName={role} fnJobFilter={fnSetJob} />
        <TagJob tagName={level} fnJobFilter={fnSetJob} />
        {languages.length > 0 &&
          languages.map((language) => (
            <TagJob tagName={language} key={language} fnJobFilter={fnSetJob} />
          ))}
        {tools.length > 0 &&
          tools.map((tools) => (
            <TagJob tagName={tools} key={tools} fnJobFilter={fnSetJob} />
          ))}
      </TagWrapper>
    </JobCard>
  );
};

export default Job;
