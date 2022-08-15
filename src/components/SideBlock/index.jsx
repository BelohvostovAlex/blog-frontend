import React from "react";

import { Typography, Box } from "@mui/material";

import { styles } from "./styles";

export const SideBlock = ({ title, children }) => {
  return (
    <Box sx={styles.sideBlock}>
      <Typography variant="h6" sx={styles.sideBlockTitle}>
        {title}
      </Typography>
      {children}
    </Box>
  );
};
