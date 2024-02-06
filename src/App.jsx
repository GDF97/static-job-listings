import { useState } from "react";
import Job from "./components/Job";
import { BodyWrapper } from "./styles/wrappers/BodyWrapper.style";
import { ContentWrapper } from "./styles/wrappers/ContentWrapper.style";
import { JobWrapper } from "./styles/wrappers/JobWrapper.style";
import JobsData from "./data/JobsData.json";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "Photosnap",
      logo: "../assets/images/photosnap.svg",
      newJob: true,
      featured: true,
      position: "Senior Frontend Developer",
      role: "Frontend",
      level: "Senior",
      postedAt: "1d ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["HTML", "CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 2,
      company: "Manage",
      logo: "../assets/images/manage.svg",
      newJob: true,
      featured: true,
      position: "Fullstack Developer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1d ago",
      contract: "Part Time",
      location: "Remote",
      languages: ["Python"],
      tools: ["React"],
    },
    {
      id: 3,
      company: "Account",
      logo: "../assets/images/account.svg",
      newJob: true,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2d ago",
      contract: "Part Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
    {
      id: 4,
      company: "MyHome",
      logo: "../assets/images/myhome.svg",
      newJob: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "5d ago",
      contract: "Contract",
      location: "USA Only",
      languages: ["CSS", "JavaScript"],
      tools: [],
    },
    {
      id: 5,
      company: "Loop Studios",
      logo: "../assets/images/loop-studios.svg",
      newJob: false,
      featured: false,
      position: "Software Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "1w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Ruby"],
      tools: ["Sass"],
    },
    {
      id: 6,
      company: "FaceIt",
      logo: "../assets/images/faceit.svg",
      newJob: false,
      featured: false,
      position: "Junior Backend Developer",
      role: "Backend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "UK Only",
      languages: ["Ruby"],
      tools: ["RoR"],
    },
    {
      id: 7,
      company: "Shortly",
      logo: "../assets/images/shortly.svg",
      newJob: false,
      featured: false,
      position: "Junior Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["HTML", "JavaScript"],
      tools: ["Sass"],
    },
    {
      id: 8,
      company: "Insure",
      logo: "../assets/images/insure.svg",
      newJob: false,
      featured: false,
      position: "Junior Frontend Developer",
      role: "Frontend",
      level: "Junior",
      postedAt: "2w ago",
      contract: "Full Time",
      location: "USA Only",
      languages: ["JavaScript"],
      tools: ["Vue", "Sass"],
    },
    {
      id: 9,
      company: "Eyecam Co.",
      logo: "../assets/images/eyecam-co.svg",
      newJob: false,
      featured: false,
      position: "Full Stack Engineer",
      role: "Fullstack",
      level: "Midweight",
      postedAt: "3w ago",
      contract: "Full Time",
      location: "Worldwide",
      languages: ["JavaScript", "Python"],
      tools: ["Django"],
    },
    {
      id: 10,
      company: "The Air Filter Company",
      logo: "../assets/images/the-air-filter-company.svg",
      newJob: false,
      featured: false,
      position: "Front-end Dev",
      role: "Frontend",
      level: "Junior",
      postedAt: "1mo ago",
      contract: "Part Time",
      location: "Worldwide",
      languages: ["JavaScript"],
      tools: ["React", "Sass"],
    },
  ]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  return (
    <BodyWrapper>
      <ContentWrapper>
        <h1>Hello World</h1>
        <JobWrapper>
          {filteredJobs.length > 0 ? (
            <p>teste</p>
          ) : (
            jobs.map((job) => <Job key={job.id} {...job} />)
          )}
        </JobWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default App;