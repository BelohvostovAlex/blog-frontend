import React from "react";

import { SideBlock } from "../SideBlock";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  List,
  Skeleton,
  Box,
} from "@mui/material";

import { styles } from "./styles";

export const CommentsBlock = ({ items, children, isLoading = true }) => {
  return (
    <SideBlock title="Comments">
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem sx={styles.commentsBlockListItem}>
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton
                    variant="circular"
                    width={40}
                    height={40}
                    sx={styles.commentsBlockAva}
                  />
                ) : (
                  <Avatar
                    alt={obj.user.fullName}
                    src={obj.user.avatarUrl}
                    sx={styles.commentsBlockAva}
                  />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <Box sx={styles.commentsBlockSkeletonWrapper}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </Box>
              ) : (
                <ListItemText
                  primary={obj.user.fullName}
                  secondary={obj.text}
                />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
      {children}
    </SideBlock>
  );
};
