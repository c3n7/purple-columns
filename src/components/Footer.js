import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#2f2e41',
    color: 'white',
    minWidth: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();
  const currentDate = new Date();

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        © Pioneer International University | {currentDate.getFullYear()}
      </Container>
    </div>
  );
}
