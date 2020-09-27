import React from "react";
import classes from "./Task.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

const Task = (props) => {
  return (
    <Card className={classes.Task}>
      <CardContent className={classes.TaskName} variant="outlined">
        <p>{props.task}</p>
      </CardContent>
      <CardActions>
        <DeleteIcon className={classes.Button} onClick={props.removeTask} />
      </CardActions>
    </Card>
  );
};

export default Task;
