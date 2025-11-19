import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import "../../assets/css/Reports.css";

const Reports = () => {
  return (
      <Box className="reports-container">
        <Paper className="reports-paper">
          <Typography variant="h6" gutterBottom>
            Reports Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
}

export default Reports;
