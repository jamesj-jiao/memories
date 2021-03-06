/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudUpload} from "@material-ui/icons";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Pages"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/aboutus" className={classes.dropdownLink}>
              About Us
            </Link>,
            <Link to="/blog" className={classes.dropdownLink}>
              Our Blog
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/uploadimage" className={classes.noDecoration}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudUpload className={classes.icons} /> Upload Image
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/uploadsound" className={classes.noDecoration}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <MusicNoteIcon className={classes.icons} /> Upload Sound
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/imagetosong" className={classes.noDecoration}>
          <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <CloudUpload className={classes.icons} /> Image to Song
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-twitter"
          title="Check out our GitHub"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://github.com/jamesj-jiao/memories"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-github"} />
            Github
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
