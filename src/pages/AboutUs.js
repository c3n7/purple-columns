import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';

import Footer from '../components/Footer.js';

import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#542344',
    },
    secondary: {
      main: '#0E1C36',
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
  appBar: {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#0C161899',
    paddingTop: '3px',
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <CssBaseline>
        <ThemeProvider theme={myTheme}>
          <Container className={classes.pageRoot}>
            <AppBar
              position="static"
              color="transparent"
              elevation={0}
              className={classes.appBar}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="secondary"
                variant="fullWidth"
                aria-label="simple tabs example"
              >
                <Tab label="Bold History" {...a11yProps(0)} />
                <Tab label="Mission, Vission & Values" {...a11yProps(1)} />
                <Tab label="Focus" {...a11yProps(2)} />
                <Tab label="Achievements & Milestones" {...a11yProps(3)} />
                <Tab label="PIU Anthem" {...a11yProps(4)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Five
            </TabPanel>
          </Container>
        </ThemeProvider>
      </CssBaseline>

      <Footer />
    </div>
  );
}
