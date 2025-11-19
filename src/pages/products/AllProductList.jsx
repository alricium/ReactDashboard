import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import "../../assets/css/AllProductList.css";

const AllProductList = () => {
  return (
      <Box className="all-product-list-container">
        <Paper className="all-product-list-paper">
          <Typography variant="h6" gutterBottom>
            All Product List Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
}

export default AllProductList;
