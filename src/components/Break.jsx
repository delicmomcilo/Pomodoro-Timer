import React from 'react'
import moment from 'moment'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Typography } from '@material-ui/core';

const Break = ({breakLength, decBreakLength, incBreakLength, disabled}) => {
    const breakLengthInMinutes = moment.duration(breakLength, "s").asMinutes();
    return (
        <div style={{display: "inline-block", marginRight: "10%"}}>
            <Typography variant="h6" component="h6">
                Break
            </Typography>
            <Typography variant="h6" component="h6">
                {breakLengthInMinutes}
            </Typography>
            <Button disabled={breakLengthInMinutes <= 1 || disabled}  variant="contained" color="primary" onClick={decBreakLength} >
               <RemoveIcon/>
           </Button>
           <Button disabled={breakLengthInMinutes >= 10 || disabled} variant="contained" color="secondary" onClick={incBreakLength}>
               <AddIcon/>
           </Button>
        </div>
    )
}

export default Break
