import { Card, Typography,Tooltip } from "@material-ui/core";
import React from "react";
import  { ProjectStack } from "./Overflow";
import { useStyle } from "./Project.style";
import "../../index.css";
import { GitHub } from "@material-ui/icons";
import {FiExternalLink} from "react-icons/fi"

const Projects = () => {
  const classes = useStyle();
  return (
    <>
      <Typography
        variant="h3"
        style={{ textAlign: "center", color: "white", marginTop: "2rem" }}
      >
        Projects
      </Typography>
      <div id="hide" className={classes.projects_container}>
        {ProjectStack.map((item) => {
          return (
            <Card
              className={classes.project_card}
              style={{ backgroundColor: "#0A1929" }}
              key={item.id}
            >
              <div>
                <img className={classes.img1} src={item.img} alt={item.title} />
              </div>
              <div>
                
                <Typography
                  variant="h6"
                  style={{ textAlign: "center", color: "white" }}
                >
                  {item.stack}
                </Typography>
                <div  style={{
                      color: "white",
                      textAlign: "center",
                      padding: ".5rem 0",
                      fontSize: "16px",
                    }}>
                  <Typography
                    variant="paragraph"
                    style={{padding: '0 10px', fontSize: 15}}
                  >
                    {item.des}
                  </Typography>
                </div>
                <div className={classes.icons}>
                  <span>
                    <a style={{ color: "white" }} href={item.net}>
                      <Tooltip title={item.net}>
                      <FiExternalLink />
                      </Tooltip>
                    </a>
                  </span>
                  <span>
                    <a style={{ color: "white" }} href={item.git}>
                      <Tooltip title={item.git} >
                      <GitHub />
                        </Tooltip>
                    </a>
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
