import React from "react";

import { Typography, TextField, Button, Box } from "@mui/material";

import { styles } from "./styles";

export const Login = () => {
  return (
    <Box sx={styles.login}>
      <Typography sx={styles.loginTitle} variant="h5">
        Login
      </Typography>
      <TextField
        sx={styles.loginTextField}
        label="Email"
        error
        helperText="Incorrect email"
        fullWidth
      />
      <TextField sx={styles.loginTextField} label="Pass" fullWidth />
      <Button size="large" variant="contained" fullWidth>
        Sign in
      </Button>
    </Box>
  );
};
