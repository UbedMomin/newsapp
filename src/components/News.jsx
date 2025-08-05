import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello, I am the constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      nextPage: null,
    };
  }

  async componentDidMount() {
    console.log("News component mounted");

    const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=top&category=${this.props.category}&apikey=pub_42cfb884a4134fc7b8448a7fc7ec3206`;
    this.setState({ loading: true });

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      this.setState({
        articles: Array.isArray(data.results) ? data.results : [],
        loading: false,
        nextPage: data.nextPage || null,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  handleNextClick = async () => {
    console.log("Next button clicked");

    if (!this.state.nextPage) {
      alert("No more news pages available.");
      return;
    }

    const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=top&category=${this.props.category}&apikey=pub_42cfb884a4134fc7b8448a7fc7ec3206&page=${this.state.nextPage}`;
    this.setState({ loading: true });

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      this.setState({
        articles: Array.isArray(data.results) ? data.results : [],
        loading: false,
        nextPage: data.nextPage || null,
      });
    } catch (error) {
      console.error("Error fetching next page:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    console.log("Rendering News component");

    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.length > 0 ? (
            this.state.articles.map((element, index) => (
              <div className="col-md-4" key={index}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.image_url}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt} 
                  source={element.source?.name}// or correct property name
                />
              </div>
            ))
          ) : (
            <p className="text-center">No articles available</p>
          )}
        </div>
        <div className="container d-flex justify-content-center my-3">
          <button
            disabled={!this.state.nextPage || this.state.loading}
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            {this.state.loading ? "Loading..." : "Next →"}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
