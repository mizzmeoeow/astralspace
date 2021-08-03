import React, { Component } from "react";

class ArtList extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    return (
      <>
        {artList.map((data, index) => {
          if (data) {
            return (
              <div key={data.name}>
                <h1>Gallery</h1>
              </div>
            );
          }
          return null;
        })}
      </>
    );
  }
}
export default ArtList;
