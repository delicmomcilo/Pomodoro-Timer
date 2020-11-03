import React from 'react'
import moment from 'moment'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Typography } from '@material-ui/core';

const Session = ({sessionLength, decSessionLength, incSessionLength, disabled}) => {
    const sessionLengthInMinutes = moment.duration(sessionLength, "s").asMinutes();
    return (
        <div style={{display: "inline-block", marginLeft: "10%"}}>
            <Typography variant="h6" component="h6">
                 Session time
            </Typography>
            <Typography variant="h6" component="h6">
                {sessionLengthInMinutes}
            </Typography>
            <Button disabled={sessionLengthInMinutes <= 1 || disabled}  variant="contained" color="primary" onClick={decSessionLength} >
               <RemoveIcon/>
           </Button>
           <Button disabled={sessionLengthInMinutes >= 60 || disabled}  variant="contained" color="secondary" onClick={incSessionLength}>
               <AddIcon/>
           </Button>
        </div>
    )
}

export default Session
