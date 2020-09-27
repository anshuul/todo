import React from "react";
import AddCircleIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import classes from "./Input.css";

const Input = (props) => {
  return (
    <div className={classes.Input}>
      <div className={classes.InputTask}>
        <TextField
          id="outlined-basic"
          label="Add your tasks"
          variant="outlined"
          onChange={props.changed}
          value={props.inputValue}
        />
        <AddCircleIcon onClick={props.clicked} className={classes.Button} />
      </div>
    </div>
  );
};

export default Input;
