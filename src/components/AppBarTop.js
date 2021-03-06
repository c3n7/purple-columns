import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Button, Box } from '@material-ui/core';
import Logo from '../assets/images/logo.svg';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#fafafa',
    color: '#0C1618',
    boxShadow: 'none',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: '#0C161899',
  },
  logo: {
    width: '7rem',
  },
  links: {
    width: '100%',
  },
}));

export default function AppBarTop() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar>
            <img
              src={Logo}
              className={classes.logo}
              alt="banner"
              onClick={() => history.push('/')}
            />
            <Box
              display="flex"
              justifyContent="flex-end"
              className={classes.links}
            >
              <Button color="inherit" onClick={() => history.push('/')}>
                Home
              </Button>
              <Button color="inherit">Contact</Button>
              <Button color="inherit" onClick={() => history.push('/about')}>
                About Us
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
