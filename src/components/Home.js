import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Youtube from "../Assets/Images/youtube.png";

const useStyles = makeStyles({
  component: {
    margin: 0,
    "& > *": {
      marginRight: 0,
    },
  },
  image: {
    width: "100%",
    height: "700px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Box className={classes.component}>
      <Box style={{ display: "flex" }}>
        <img src={Youtube} className={classes.image} />
      </Box>
    </Box>
  );
};

export default Home;
