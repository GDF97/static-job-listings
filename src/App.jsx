import { useEffect, useState } from "react";
import Job from "./components/Job";
import { BodyWrapper } from "./styles/wrappers/BodyWrapper.style";
import { ContentWrapper } from "./styles/wrappers/ContentWrapper.style";
import { JobWrapper } from "./styles/wrappers/JobWrapper.style";
import JobsData from "./data/JobsData.json";
import Header from "./components/Header";

function App() {
  const [jobs, setJobs] = useState(JobsData);
  const [filters, setFilters] = useState([]);

  function setFiltersForJob(filterValue) {
    if (filters.includes(filterValue)) return;
    setFilters([...filters, filterValue]);
  }

  function setJobsByTheFilter(filterArray) {
    const arrayDeApoio = [];

    filterArray.forEach((filter) => {
      jobs.forEach((job) => {
        if (
          job.languages.includes(filter) ||
          job.level === filter ||
          job.role === filter ||
          job.tools.includes(filter)
        ) {
          console.log(job.languages);
          if (!arrayDeApoio.includes(job)) {
            arrayDeApoio.push(job);
          }
        }
      });
    });

    console.log(arrayDeApoio);
    if (arrayDeApoio.length > 0) {
      setJobs(arrayDeApoio);
    } else {
      setJobs(JobsData);
    }

    return;
  }

  function clearFilters() {
    console.log("clear");
    setFilters([]);
  }

  function clearOneFilter(filterButton) {
    let newFiltersArray = filters.filter((filter) => filter !== filterButton);

    if (newFiltersArray.length === 0) {
      clearFilters();
      return;
    }

    setFilters(newFiltersArray);
  }

  useEffect(() => {
    if (filters.length > 0) {
      setJobsByTheFilter(filters);
    } else {
      setJobs(JobsData);
    }
  }, [filters]);

  return (
    <BodyWrapper>
      <ContentWrapper>
        <Header
          filters={filters}
          fnClearFilters={clearFilters}
          fnClearOneFilter={clearOneFilter}
        />
        <JobWrapper>
          {jobs.map((job) => (
            <Job key={job.id} {...job} fnSetJob={setFiltersForJob} />
          ))}
        </JobWrapper>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default App;
