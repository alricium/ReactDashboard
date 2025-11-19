import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "../assets/css/News.css";

const News = () => {
  return (
      <Box className="news-container">
        <Paper className="news-paper">
          <Typography variant="h6" gutterBottom>
            News Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
};

export default News;
