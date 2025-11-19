import React from "react";
import {Box, Paper, Typography} from "@mui/material";
import "../../assets/css/ProductDetails.css";

const ProductDetails = () => {
  return (
      <Box className="product-details-container">
        <Paper className="product-details-paper">
          <Typography variant="h6" gutterBottom>
            Product Details Section
          </Typography>
          <Typography variant="body1">
            This section is not yet developed.
          </Typography>
        </Paper>
      </Box>
  );
}

export default ProductDetails;
