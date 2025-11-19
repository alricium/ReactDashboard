import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import "../../assets/css/Statistics.css";

const Statistics = () => {
  return (
      <Box className="statistics-container">
        <Paper className="statistics-paper">
          <Typography variant="h6" gutterBottom>
            Statistics Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
}

export default Statistics;
