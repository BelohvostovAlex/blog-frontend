import React from "react";

import { Post } from "../../components/Post";
import { TagsBlock } from "../../components/TagBlock/TagsBlock";
import { CommentsBlock } from "../../components/CommentsBlock/CommentsBlock";
import { useActions } from "../../hooks/useActions";

import { Grid, Tab, Tabs } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getPostsSelector } from "../../redux/slices/postsSlice/postSelectors";

export const Home = () => {
  const { fetchPosts } = useActions();
  const { posts, tags } = useSelector(getPostsSelector);

  const { items, isLoading, isError } = posts;

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="basic tabs example"
      >
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {isLoading
            ? [...Array(5)].map((_, i) => (
                <Post key={i} isLoading={isLoading} />
              ))
            : items.map(
                ({
                  _id,
                  title,
                  text,
                  tags,
                  imageUrl,
                  viewsCount,
                  createdAt,
                  user,
                }) => {
                  return (
                    <Post
                      key={_id}
                      _id={_id}
                      title={title}
                      text={text}
                      tags={tags}
                      imageUrl={imageUrl}
                      viewsCount={viewsCount}
                      createdAt={createdAt}
                      user={user}
                    />
                  );
                }
              )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={["react", "typescript", "notes"]}
            isLoading={false}
          />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: "Вася Пупкин",
                  avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                },
                text: "Это тестовый комментарий",
              },
              {
                user: {
                  fullName: "Иван Иванов",
                  avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                },
                text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
