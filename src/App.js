import React, { Component } from "react";
import classes from "./App.css";
import Input from "./components/Input/Input";
import Tasks from "./components/Tasks/Tasks";
import Aux from "./hoc/Auxiliary/Auxiliary";
import { firestore } from "firebase";

class App extends Component {
  state = {
    list: [],
    newTask: { newItem: "" },
  };

  componentDidMount() {
    const db = firestore();
    let list = [];
    db.collection("task")
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          list.push({ id: doc.id, newItem: doc.data()["newItem"] });
        });
        this.setState({
          ...this.state,
          list: list,
        });
        console.log(this.state);
      });
  }

  updateListHandler = () => {
    console.log("UPDATE ITEM HANDLER", this.state);
    if (this.state.newTask.newItem === "") {
      alert("Please Enter your task!");
    } else {
      const newList = [...this.state.list];
      const newItem = this.state.newTask;
      newList.push(newItem);
      console.log(newList);
      const db = firestore();
      db.collection("task")
        .add({
          newItem: this.state.newTask.newItem,
        })
        .then(() => {
          console.log("Done");
          this.componentDidMount();
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      this.setState({
        newTask: { newItem: "" },
      });
    }
  };

  addItemHandler = (event) => {
    console.log("ADD ITEM HANDLER", this.state);
    const newItem = event.target.value;
    this.setState({
      newTask: { newItem: newItem },
    });
  };

  removeTaskHandler = (key) => {
    let newList = [...this.state.list];
    newList = newList.filter((item) => item.id !== key);
    this.setState({
      ...this.state,
      list: newList,
    });
    const db = firestore();
    db.collection("task").doc(key).delete();
  };

  render() {
    return (
      <Aux>
        <div className={classes.App}>
          <Input
            clicked={this.updateListHandler}
            changed={(event) => {
              this.addItemHandler(event);
            }}
            inputValue={this.state.newTask.newItem}
          />
        </div>
        <div>
          <Tasks
            taskAdded={this.state.list}
            removeTask={(id) => this.removeTaskHandler(id)}
          />
        </div>
      </Aux>
    );
  }
}

export default App;
