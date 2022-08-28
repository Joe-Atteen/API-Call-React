import React, { Component } from "react";

class ClassReview extends Component {
  constructor(props) {
    super(props);
    this.state = { reviews: [] };
  }
  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=PBuEzSd2Bj3OAJszSHzUoLdx3oeMKtOU"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ reviews: data.results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Movie Reviews</h1>
        <div>
          {this.state.reviews.map((data, index) => {
            return (
              <div key={index}>
                <p>Title: {data.display_title}</p>
                <p>Headline: {data.headline}</p>
                <p>Byline: {data.byline}</p>
                <p>Critics Pick: {data.critics_pick}</p>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ClassReview;
