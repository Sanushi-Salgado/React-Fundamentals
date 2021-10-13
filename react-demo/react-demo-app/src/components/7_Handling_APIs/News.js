import React, { Component } from "react";
import NewSingle from "./NewSingle";
import Error from "./Error";

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url =
      "https://newsapi.org/v2/everything?q=Apple&from=2021-10-03&sortBy=popularity&apiKey=7ea3534dfe894d4ca5245e94406d01e3";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({ error: true });
        console.log(error);
      });
  }

  // Render all news items
  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else return <Error />;
  }

  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
