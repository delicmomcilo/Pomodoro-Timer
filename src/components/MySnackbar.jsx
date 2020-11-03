import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import green from '@material-ui/core/colors/green';

export default function MySnackbar(props) {  
    return (
      <SnackbarContent
        style={{backgroundColor: green[600]}}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar">
            {props.message}
          </span>
        }
      />
    );
  }