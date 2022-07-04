import React from "react";
import {
  Typography,
} from "@material-ui/core";

import { useStyle } from "./Navbar.style";

import "../../index.css";

const Navbar = () => {
  const classes = useStyle();
 
  return (
    <>
 <div style={{ background: "#b01100", margin:0 }}>
          <header className={classes.appbar}>
            <Typography variant="h6">Dev Godwin</Typography>
            <Typography style={{ marginTop: 6 }}>
              <a className="blog-link"  href='https://devilon.online'>Blog</a>
            </Typography>
          </header>
        </div>
    </>

  );
};

export default Navbar;
