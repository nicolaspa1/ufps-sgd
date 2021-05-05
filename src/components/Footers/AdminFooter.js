import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import componentStyles from "assets/theme/components/admin-footer.js";

const useStyles = makeStyles(componentStyles);

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component="footer" width="100%" padding="2.5rem 0">
      <Grid container classes={{ root: classes.justifyContentCenter }}>
        <Box
          item
          xs={12}
          xl={6}
          component={Grid}
          display="flex"
          alignItems="center"
          className={classes.justifyContentCenter}
        >
          <div className={classes.copyrightWrapper}>
            © {new Date().getFullYear()}{" "}
            <a
              className={classes.copyrightLink}
              href="https://ww2.ufps.edu.co"
              rel="noopener noreferrer"
              target="_blank"
            >
              Universidad Francisco de Paula Santander
            </a>
          </div>
        </Box>

        <Grid
          item
          xl={6}
          component={Box}
          display="flex"
          justifyContent="flex-end"
        >
          <Box
            component={List}
            display="flex"
            justifyContent="center"
            alignItems="center"
            className={classes.flexDirectionColumn}
          >
            <ListItem
              component="a"
              href="https://ingsistemas.cloud.ufps.edu.co/"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              UFPS Tic's
            </ListItem>

            <ListItem
              component="a"
              href="https://ww2.ufps.edu.co/oferta-academica/ingenieria-de-sistemas"
              rel="noopener noreferrer"
              target="_blank"
              classes={{
                root: classes.listItemRoot,
              }}
            >
              Sobre nosotros
            </ListItem>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
