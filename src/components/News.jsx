import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello, I am the constructor from News component");
    this.state = {
      articles: [],
      loading: false,
    };
  }

  // articles = [
  //   {
  //     source: { id: "bbc-news", name: "BBC News" },
  //     author: "BBC News",
  //     title: "Global Markets Rally as Tech Stocks Surge",
  //     description:
  //       "Technology stocks led the rally with major indices closing at record highs.",
  //     url: "https://www.bbc.com/news/business-12345678",
  //     urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1234.jpg",
  //     publishedAt: "2025-08-01T08:30:00Z",
  //     content:
  //       "Global markets saw a significant uptick today, driven by gains in the tech sector...",
  //   },
  //   {
  //     source: { id: "the-verge", name: "The Verge" },
  //     author: "Jane Doe",
  //     title: "Apple's Latest iPhone Comes with Radical New Features",
  //     description:
  //       "Apple unveils the iPhone 17 Pro Max with foldable design and AI features.",
  //     url: "https://www.theverge.com/2025/08/01/apple-iphone-17-launch",
  //     urlToImage: "https://cdn.theverge.com/2025/08/01/iphone17.jpg",
  //     publishedAt: "2025-08-01T07:00:00Z",
  //     content:
  //       "Apple has officially revealed the iPhone 17 Pro Max today in its annual fall event...",
  //   },
  //   {
  //     source: { id: null, name: "TechCrunch" },
  //     author: "John Smith",
  //     title: "AI Startups Receive Record Funding in 2025",
  //     description:
  //       "VCs are pouring billions into AI-driven startups with high growth potential.",
  //     url: "https://techcrunch.com/2025/08/01/ai-startup-funding-boom",
  //     urlToImage: "https://techcrunch.com/image/ai-funding-2025.jpg",
  //     publishedAt: "2025-08-01T06:15:00Z",
  //     content:
  //       "Artificial Intelligence remains a hot sector for investors, with several startups...",
  //   },
  // ];

  async componentDidMount() {
    console.log("News component mounted");
    let url =
      "https://newsdata.io/api/1/news?country=us&category=top&apikey=pub_42cfb884a4134fc7b8448a7fc7ec3206";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.results, loading: false });
  }

  render() {
    console.log("Rendering News component");
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article, index) => {
            const key = article.url || index; // Fallback in case url is undefined
            return (
              <div className="col-md-4" key={key}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.image_url || article.urlToImage} // Support NewsData.io
                  newsUrl={article.link || article.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default News;
