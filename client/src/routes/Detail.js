import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    // console.log(location.state.poster);
    if (location.state) {
      return (
        <div className="detail_container">
          <div className="detail_content">
            <img className="detail_poster" src={location.state.poster}></img>
            <div className="text_container">
              <span className="detail_title">{location.state.title}</span>
              <p className="detail_summary">{location.state.summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
