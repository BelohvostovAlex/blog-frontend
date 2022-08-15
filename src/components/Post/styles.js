export const styles = {};

export const makeStyles = (full) => {
  return {
    root: {
      post: {
        backgroundColor: "#fff",
        border: "1px solid #dedede",
        borderRadius: "6px",
        overflow: "hidden",
        marginBottom: "15px",
        position: "relative",
        "&:hover": full
          ? {
              backgroundColor: "#fff",
              border: "1px solid #dedede",
              boxShadow: "none",
            }
          : {
              border: "1px solid #4361ee",
              boxShadow: "0 0 0 1px #4361ee",
              ".editButtons": {
                opacity: "1",
              },
            },
      },
      postImg: {
        width: "100%",
        height: full ? "100%" : "300px",
        objectFit: "cover",
        minHeight: full && "300px",
      },

      postEditButtonsWrapper: {
        position: "absolute",
        right: "15px",
        top: "15px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "10px",
        opacity: "0",
        transition: "all 0.15s ease-in-out",
      },
      postWrapper: {
        padding: "10px 20px 20px",
      },
      postSkeleton: {
        backgroundColor: "#fff",
        border: "1px solid #dedede",
        borderRadius: "6px",
        overflow: "hidden",
        marginBottom: "15px",
      },
      postTitle: {
        fontSize: full ? "42px" : "28px",
        fontWeight: "900",
        margin: "0",
        "&:hover": {
          color: "#4361ee",
        },
        a: {
          color: "black",
        },
      },
      postTags: {
        listStyle: "none",
        padding: "0",
        margin: "5px 0 0 0",
        display: "flex",
      },
      postTagItem: {
        fontSize: "14px",
        marginRight: "15px",
        opacity: " 0.5",
        width: "fit-content",
        padding: "4px 8px",
        "&:hover": {
          opacity: "1",
        },
        a: {
          textDecoration: "none",
          color: "#000",
        },
      },
      postIndention: {
        paddingLeft: "40px",
      },
      postContent: {
        margin: "30px 0 50px",
        p: {
          fontSize: "22px",
          lineHeight: "36px",
        },
      },
      postDetails: {
        listStyle: "none",
        padding: "0",
        margin: "20px 0 0 0",
        display: "flex",
        justifyContent: "flex-start",
      },
      postDetailsItem: {
        fontSize: "14px",
        marginRight: "20px",
        opacity: "0.5",
        width: "fit-content",
        padding: "4px 8px",
        svg: {
          fontSize: "18px",
          marginRight: "5px",
        },
      },
    },
  };
};
