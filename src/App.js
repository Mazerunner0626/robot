import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import "./styles.css";
import { SearchBox } from "./components/search-box/index";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  onSearchChanged = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((Response) => Response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    const { robots, searchfield } = this.state;

    const filteredRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchfield)
    );

    return (
      <div className="App">
        <h1>Роботуудын хайлт</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
