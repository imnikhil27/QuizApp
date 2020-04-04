import TextField from "@material-ui/core/TextField";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStylesInputField = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function GetInputField(props) {
    const classes = useStylesInputField();

    return <form onSubmit={e => {
        e.preventDefault();
    }} className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label={props.label} variant="outlined"/>
    </form>

}

export default GetInputField;