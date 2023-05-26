import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ page, setPage }) {
  const checkPage = (event, newPage) => {
    setPage(newPage);
    console.log("Đang ở trang", newPage);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        color="secondary"
        page={page}
        onChange={checkPage}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      />
    </Stack>
  );
}
