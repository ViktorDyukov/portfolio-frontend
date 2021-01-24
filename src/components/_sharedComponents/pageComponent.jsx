import React, { Component } from "react";

class ApiPageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      apihost: "http://127.0.0.1:8000/",
      apiurls: {
        page: "page",
        project: "project",
      },
    };
  }

  componentDidMount() {
    console.log(this);
    const id = this.props.match.params.id;
    fetch(`http://127.0.0.1:8000/project/${id}/`)
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
}

export default ApiPageComponent;
