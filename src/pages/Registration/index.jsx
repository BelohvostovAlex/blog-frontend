import React from "react";

import { Box, Typography, TextField, Button, Avatar } from "@mui/material";

import { styles } from "./styles";

export const Registration = () => {
  return (
    <Box sx={styles.registration}>
      <Typography sx={styles.registrationTitle} variant="h5">
        Create new account
      </Typography>
      <Box sx={styles.registrationAva}>
        <Avatar sx={styles.registrationAvaImg} />
      </Box>
      <TextField sx={styles.registrationField} label="Fullname" fullWidth />
      <TextField sx={styles.registrationField} label="Email" fullWidth />
      <TextField sx={styles.registrationField} label="Pass" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Register
      </Button>
    </Box>
  );
};
