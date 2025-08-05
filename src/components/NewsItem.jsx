import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, descripition, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className=" my-3">
        <div className="card">
          <span className="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source}
          </span>
          <img className="card-img-top" src={imageUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{descripition}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
