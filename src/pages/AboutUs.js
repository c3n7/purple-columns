import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';

import Footer from '../components/Footer.js';

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#5750BE',
    },
    secondary: {
      main: '#65617D',
      contrastText: '#5750BE',
    },
    info: {
      main: '#5750BE',
    },
    text: {
      primary: '#2F2E41',
      secondary: '#65617D',
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pageRoot: {
    paddingTop: 14,
    paddingLeft: 0,
    paddingRight: 0,
  },
  banner: {
    paddingTop: 15,
    color: '#2F2E41',
    '& > *': {
      marginRight: theme.spacing(1),
    },
  },
  bannerImage: {
    height: '20rem',
  },
  subSectionImage: {
    height: '15rem',
  },
  bannerHeading: {
    marginTop: 0,
    marginBottom: 10,
    lineHeight: '2rem',
    fontSize: '2rem',
  },
  bannerSubHeading: {
    marginTop: '2rem',
    marginBottom: 10,
    lineHeight: '2rem',
    fontSize: '1.3rem',
  },
  listItem: {
    color: '#65617D',
    textAlign: 'center',
  },
  patnerListItem: {
    color: '#65617D',
    textAlign: 'right',
  },

  bannerSubtext: {
    marginBottom: '1rem',
  },
  productsSection: {
    textAlign: 'center',
  },
  productsSectionIcons: {
    textAlign: 'center',
    width: '5rem',
    height: '5rem',
    padding: '1.4rem',
    borderRadius: '15px',
    backgroundColor: '#5750BE22',
  },
  section: {
    marginBottom: '2rem',
  },
  sectionHeading: {
    marginTop: 0,
    textAlign: 'center',
    marginBottom: 5,
    lineHeight: '2rem',
    fontSize: '2rem',
  },
  sectionText: {
    textAlign: 'justify',
    marginBottom: '1rem',
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline>
        <ThemeProvider theme={myTheme}>
          <Container className={classes.pageRoot}>About Us</Container>
        </ThemeProvider>
      </CssBaseline>

      <Footer />
    </div>
  );
}
