import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => {
  return {
    input: {
      border: '1px solid white',
      borderRadius: "5px",
      margin: "1.5rem 0 1rem 0",
      color: 'white',
      
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
      
    },
    grid_container: {
      width: "100%",
     
      display: "flex",
      justifyContent: "center",
      padding: "30px 0",
      margin: '2rem 0'
    },

    btn: {
      width: "50%",
      border: "2px solid #fff",
      color: "white",
    },

    error: {
      background: "red",
      color: "white",
      textAlign: "center",
      margin: ".5rem 0",
      padding: ".5rem 0",
      fontSize: "15px",
      borderRadius: "8px",
      zIndex: "1000000",

      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
  };
});
