export const styles = {
  header: {
    backgroundColor: "#fff",
    padding: "10px 0px",
    borderBottom: "1px solid #e0e0e0",
    marginBottom: "30px",
  },
  headerInner: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerLogo: {
    backgroundColor: "black",
    fontWeight: "700",
    lineHeight: "35px",
    textTransform: "uppercase",
    letterSpacing: "0.15px",
    borderRadius: "5px",
    padding: "0px 10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: ".2s all ease-in",

    "&:hover": {
      backgroundColor: "#4361ee",
    },
  },
  headerButton: {
    marginRight: "10px",
  },
};
