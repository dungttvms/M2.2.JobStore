import React from "react";
import jobs from "../jobs.json";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Box, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";

function DetailPage() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.jobs.find((job) => job.id === jobId);
  // console.log(job);
  // if (!job)
  //   return (
  //     <Typography variant="h3" margin={3}>
  //       No found Job
  //     </Typography>
  //   );

  return (
    <Container
      className="detail-page-container"
      sx={{
        border: "1px solid",
        width: "fit-content",
        p: 2,
        borderRadius: "5px",
        marginTop: "50px",
      }}
    >
      <Typography
        variant="h3"
        className="job-title"
        marginTop="10px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {job.title}
      </Typography>
      <hr width="90%" />
      <Typography
        variant="body2"
        fontSize="20px"
        marginTop="25px"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {job.description.slice(0, 100).trim() + "..."}
      </Typography>
      <Box
        className="skills-container"
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="h6" className="skills-label" fontWeight="Bold">
          Skills you need:
        </Typography>
        <Stack direction="column" spacing={2} width="300px">
          {job.skills.slice(0, 4).map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              color="primary"
              className="skill-chip"
            />
          ))}
        </Stack>

        <Typography
          variant="h6"
          className="city-label"
          marginTop="25px"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          City: {job.city}
        </Typography>
      </Box>
    </Container>
  );
}

export default DetailPage;
