import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./Skeleton";

import { Box, IconButton, List, ListItem, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import styles from "./Post.module.scss";
import { styles as style } from "./styles.js";

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable,
}) => {
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {};

  return (
    <Box className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {true && (
        <Box className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </Box>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <Box className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <Box className={styles.indention}>
          <Typography
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </Typography>
          <List className={styles.tags}>
            {tags.map((name) => (
              <ListItem key={name}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </ListItem>
            ))}
          </List>
          {children && <Box className={styles.content}>{children}</Box>}
          <List className={styles.postDetails}>
            <ListItem>
              <EyeIcon />
              <Box component="span">{viewsCount}</Box>
            </ListItem>
            <ListItem>
              <CommentIcon />
              <Box component="span">{commentsCount}</Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
