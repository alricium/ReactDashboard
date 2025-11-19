import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import "../../assets/css/FeaturedProducts.css";

const FeaturedProducts = () => {
  return (
      <Box className="featured-products-container">
        <Paper className="featured-products-paper">
          <Typography variant="h6" gutterBottom>
            Featured Products Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
}

export default FeaturedProducts;
