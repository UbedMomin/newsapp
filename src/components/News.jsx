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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  constructor(props) {
    super(props);
    console.log("Hello, I am the constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      nextPage: null,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - NewsMonkey`;
  }

  async updateNews() {
    const url = `https://newsdata.io/api/1/news?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apikey}&page=${this.state.page}`;
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

  async componentDidMount() {
    console.log("News component mounted");
    this.updateNews(); // Call the same method on mount
  }

  handleNextClick = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      () => this.updateNews() // update after setting new page
    );
  };

  render() {
    console.log("Rendering News component");

    return (
      <div className="container my-3">
        <h1 className="text-center">
          Top {this.capitalizeFirstLetter(this.props.category)} Headlines 
        </h1>
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
                  source={element.source?.name}
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
