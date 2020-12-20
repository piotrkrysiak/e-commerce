import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import { List } from "antd";
import Item from "antd/lib/list/Item";

class App extends Component {
  state = {
    values: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      this.setState({
        values: response.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>
          Initial project test:
        </h1>
        <List>
          {this.state.values.map((value: any) => (
            <Item key={value.id}>{value.name}</Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
