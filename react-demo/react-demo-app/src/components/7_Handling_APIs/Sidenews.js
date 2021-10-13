import React, { Component } from "react";
import SingleSide from "./SingleSide";
import axios from "axios";
import Error from "./Error";

class Sidenews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=Apple&from=2021-10-03&sortBy=popularity&apiKey=7ea3534dfe894d4ca5245e94406d01e3";

    axios
      .get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
        console.log(error);
      });
  }

  // Render all news items
  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => {
        <SingleSide key={item.url} item={item} />
      });
    } else return <Error />;
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default Sidenews;
