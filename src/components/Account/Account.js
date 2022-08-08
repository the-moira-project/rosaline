import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DataTable from "./DataTable/DataTable";

const Account = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          minHeight: "100vh",
          p: 5,
        }}
      >
        <Box>
          <Typography variant="h2" gutterBottom sx={{ mt: 3, color: 'primary.light' }}>
            Account Details
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ my: 1, color: 'primary.dark' }}>
            Name: Dale Grayhair
          </Typography>
          <Typography variant="h6" gutterBottom sx={{ my: 1, color: 'primary.dark' }}>
            Account: 0000069
          </Typography>
        </Box>
        <Box sx={{ mt: 3, py: 3 }}>
          <DataTable />
        </Box>
      </Grid>
    </>
  );
};

export default Account;
