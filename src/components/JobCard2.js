import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Chip, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function JobCard2({ job }) {
  const navigate = useNavigate();
  const { user } = useAuth;

  const handleReadMore = () => {
    if (!user) {
      navigate(`/job/${job.id}`);
    } else {
      navigate("/login");
    }
    console.log(user);
  };
  return (
    <Card
      onClick={() => navigate(`/job/${job.id}`)}
      sx={{
        width: "500px",
        height: "320px",
        mt: 2,
        background: "#606575",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: "16px",
      }}
    >
      <CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            fontSize="22px"
            component="div"
            noWrap
          >
            {job.title}
          </Typography>
          <hr color="blue" width="350px" />
          <Stack direction="row" spacing={0.5} alignItems="center">
            <Box
              className="skills-container"
              display="flex"
              flex-direction="column"
              align-items="center"
            >
              <Typography
                variant="h6"
                className="skills-label"
                marginRight="5px"
              >
                Skills you need:
              </Typography>
              <Stack direction="column" spacing={2}>
                {job.skills.slice(0, 4).map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    color="primary"
                    className="skill-chip"
                  />
                ))}
              </Stack>
            </Box>
          </Stack>
        </CardContent>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="outlined" color="success" onClick={handleReadMore}>
          Read More
        </Button>
      </CardActionArea>
    </Card>
  );
}

export default JobCard2;
