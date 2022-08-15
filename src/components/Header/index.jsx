import React from "react";
import { Link } from "react-router-dom";

import { Container, Button, Box, Typography } from "@mui/material";

import { styles } from "./styles";

export const Header = () => {
  const isAuth = true;

  const onClickLogout = () => {};

  return (
    <Box sx={styles.header}>
      <Container maxWidth="lg">
        <Box sx={styles.headerInner}>
          <Box sx={styles.headerLogo}>
            <Link to="/">
              <Typography>My Blog</Typography>
            </Link>
          </Box>
          <Box>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <Button variant="contained" sx={styles.headerButton}>
                    Написать статью
                  </Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outlined" sx={styles.headerButton}>
                    Войти
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
