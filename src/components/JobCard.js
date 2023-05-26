import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Divider,
  Button,
  Typography,
} from "@mui/material";
import ModalPage from "../pages/ModalPage";

export default function JobCard({ job, id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Card
      sx={{
        width: "300px",
        height: "230px",
        mt: 2,
        display: "flex",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.title}
        </Typography>
        <Divider />
        <CardActions>
          {job.skills.slice(0, 4).map((skill, i) => (
            <Button
              key={i}
              variant="contained"
              sx={{
                borderRadius: 4,
                color: "#fff",
              }}
              size="small"
            >
              {job.skills[i]}
            </Button>
          ))}
        </CardActions>

        <Typography variant="body2">
          {job.description.slice(0, 100).trim() + "..."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          onClick={handleOpenModal}
          size="small"
          sx={{ color: "#111", backgroundColor: "orange" }}
        >
          Read More...
        </Button>
        {isModalOpen && (
          <ModalPage handleClose={handleCloseModal} isModalOpen={isModalOpen} />
        )}
      </CardActions>
    </Card>
  );
}
