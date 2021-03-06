import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

import image from "../images/project-grind.png";
import { Card } from "@material-ui/core";
import Carousel from "react-slick";
import LocationOn from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(styles);

export default function Post8() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Saturday, 11/3:</h2>
            <h4>
              Even on election day the grind never ends! The whole team got
              together to grind out the last few details of each subteams’
              models to prepare for the mid semester deliverable! Shuming and
              Kevin started on the Google Cloud platform to upload their model
              on the backend server, while Rachel began working on the frontend
              for the website. Armaan and Carly spent the majority of the
              session making sure their fine tuning their model seeing if they
              could increase their accuracy.
            </h4>
          </GridItem>

          <GridItem
            xs={12}
            sm={12}
            md={8}
            md={8}
            className={classes.marginAuto}
          >
            <Card carousel>
              <Carousel>
                <div>
                  <img src={image} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Rachel's Place
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>

        <br></br>
        {/* Image Here */}
      </div>
    </div>
  );
}
