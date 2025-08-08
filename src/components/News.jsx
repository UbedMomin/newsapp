import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // Capitalize helper function
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Fetch news data
  const updateNews = async (pageNum = page) => {
    const url = `https://newsdata.io/api/1/news?country=${props.country}&category=${props.category}&apikey=${props.apikey}&page=${pageNum}`;
    setLoading(true);

    try {
      let response = await fetch(url);
      let data = await response.json();

      // The NewsData API might have different field names — adjust accordingly
      setArticles(data.results || []); // results instead of articles
      setTotalResults(data.totalResults || 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  // Runs on first render
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
  }, []);

  // Handle next page
  const handleNextClick = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    updateNews(nextPage);
  };

  return (
  <div className="container my-3">
    <h1 className="text-center" style={{ marginTop: "90px" }}>
      Top {capitalizeFirstLetter(props.category)} Headlines
    </h1>

      {loading && <Spinner />}

      <div className="row">
        {!loading && articles.length > 0 ? (
          articles.map((element, index) => (
            <div className="col-md-4" key={index}>
              <NewsItem
                title={element.title}
                description={element.description}
                imageUrl={element.image_url}
                newsUrl={element.link}
                author={element.creator || "Unknown"}
                date={element.pubDate}
                source={element.source_id}
              />
            </div>
          ))
        ) : (
          !loading && <p className="text-center">No articles available</p>
        )}
      </div>

      <div className="container d-flex justify-content-center my-3">
        <button
          disabled={loading}
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          {loading ? "Loading..." : "Next →"}
        </button>
      </div>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apikey: PropTypes.string.isRequired,
};

export default News;
