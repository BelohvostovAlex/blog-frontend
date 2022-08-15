import React from "react";
import { Link } from "react-router-dom";

import { TextField, Button, Box } from "@mui/material";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { styles } from "./styles";

export const AddPost = () => {
  const imageUrl = "";
  const [value, setValue] = React.useState("");

  const handleChangeFile = () => {};

  const onClickRemoveImage = () => {};

  const onChange = React.useCallback((value) => {
    setValue(value);
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Введите текст...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  return (
    <Box sx={styles.addPost}>
      <Button variant="outlined" size="large">
        Upload preview
      </Button>
      <input type="file" onChange={handleChangeFile} hidden />
      {imageUrl && (
        <Button variant="contained" color="error" onClick={onClickRemoveImage}>
          Delete
        </Button>
      )}
      {imageUrl && (
        <img
          className={styles.image}
          src={`http://localhost:4444${imageUrl}`}
          alt="Uploaded"
        />
      )}
      <br />
      <br />
      <TextField
        sx={styles.addPostTitleInput}
        variant="standard"
        placeholder="Post title..."
        fullWidth
      />
      <TextField
        sx={styles.addPostTagsInput}
        variant="standard"
        placeholder="Tags"
        fullWidth
      />
      <SimpleMDE
        className={styles.editor}
        value={value}
        onChange={onChange}
        options={options}
      />
      <Box sx={styles.addPostButtonsWrapper}>
        <Button size="large" variant="contained" sx={styles.addPostButton}>
          Publish
        </Button>
        <Link to="/">
          <Button size="large" sx={styles.addPostButton}>
            Cancel
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
