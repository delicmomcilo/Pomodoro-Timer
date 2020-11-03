import React, {useState, useEffect} from 'react'
import moment from 'moment'
import momemntDurationFormatSetup from 'moment-duration-format'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import RefreshIcon from '@material-ui/icons/Refresh';
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import { Typography } from '@material-ui/core';

momemntDurationFormatSetup(moment);

const Timer = ({time, timerLabel, handleResetButton, handleStartStop, startStopLabel}) => {
    const fromattedTime = moment.duration(time, 's').format('mm:ss', {trim: false})
    return (
        <div style={{ marginTop: "5%"}}>
            <div>
                <Fab color="secondary" style={{width: "140px", height: "140px"}}>
                <p style={{fontSize: "30px"}}>{fromattedTime}</p>
                </Fab>
            <Typography variant="h6" component="h6">
                {timerLabel}
            </Typography>
            </div>
            <div style={{ marginTop: "1%"}}>
           <Button variant="contained" color="primary" onClick={handleStartStop} aria-label="Delete">
                {startStopLabel === "Start" ? <PlayCircleOutlineIcon /> : <PauseCircleOutlineIcon /> }
            </Button>
           <Button variant="contained" color="secondary" onClick={handleResetButton} >
               <RefreshIcon/>
           </Button>
           </div>
        </div>
    )
}

export default Timer
