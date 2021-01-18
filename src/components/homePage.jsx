import React, { Component } from "react";

class HomePage extends Component {


  componentDidMount() {
    let cid = this.props.match.params.cid;
    if (cid === undefined) {
      cid = "999";
    }
    fetch(`http://127.0.0.1:8000/links/${cid}/`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div>{JSON.stringify(items, null, 2)}</div>;
    }
  }
}

export default HomePage;
