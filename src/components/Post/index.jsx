import React from "react";
import { Link } from "react-router-dom";

import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./PostSkeleton/Skeleton";

import { Box, IconButton, List, ListItem, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { makeStyles } from "./styles.js";

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
  const styles = makeStyles(isFullPost);
  if (isLoading) {
    return <PostSkeleton />;
  }

  const onClickRemove = () => {};

  return (
    <Box sx={styles.root.post}>
      {true && (
        <Box className="editButtons" sx={styles.root.postEditButtonsWrapper}>
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
        <Box
          component="img"
          sx={styles.root.postImg}
          src={imageUrl}
          alt={title}
        />
      )}
      <Box sx={styles.root.postWrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <Box sx={styles.root.postIndention}>
          <Typography sx={styles.root.postTitle}>
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </Typography>
          <List sx={styles.root.postTags}>
            {tags.map((name) => (
              <ListItem key={name} sx={styles.root.postTagItem}>
                <Link to={`/tag/${name}`}>#{name}</Link>
              </ListItem>
            ))}
          </List>
          {children && <Box sx={styles.root.postContent}>{children}</Box>}
          <List sx={styles.root.postDetails}>
            <ListItem sx={styles.root.postDetailsItem}>
              <EyeIcon />
              <Box component="span">{viewsCount}</Box>
            </ListItem>
            <ListItem sx={styles.root.postDetailsItem}>
              <CommentIcon />
              <Box component="span">{commentsCount}</Box>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
