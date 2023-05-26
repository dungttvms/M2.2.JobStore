import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import JobCard2 from "../components/JobCard2";
import jobs from "../jobs.json";
import BasicPagination from "../components/BasicPagination";
import { Container } from "@mui/material";

function HomePage() {
  const [page, setPage] = useState(1);
  const [displayedJobs, setDisplayedJobs] = useState([]);

  useEffect(() => {
    const startIndex = (page - 1) * 4;
    const endIndex = page * 4;
    const jobsToDisplay = jobs.jobs.slice(startIndex, endIndex);
    setDisplayedJobs(jobsToDisplay);
  }, [page]);

  return (
    <Container
      className="card-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          mt: 3,
          margin: "10px",
          marginLeft: "10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {displayedJobs.map((job) => (
          <Grid key={job.id} item xs={12} md={6}>
            <JobCard2 job={job} />
          </Grid>
        ))}
      </Grid>
      <BasicPagination page={page} setPage={setPage} />
    </Container>
  );
}

export default HomePage;
