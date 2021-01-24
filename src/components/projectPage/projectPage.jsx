import React, { Component } from "react";
import Page404 from "../page404/page404.jsx";
import ApiPageComponent from "../_sharedComponents/pageComponent";

class ProjectPage extends ApiPageComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  render() {
    console.log("o1");
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      if (items["detail"] == "Not found.") {
        return <Page404 />;
      }
      return <div>{JSON.stringify(items, null, 2)}</div>;
    }
  }
}

export default ProjectPage;
