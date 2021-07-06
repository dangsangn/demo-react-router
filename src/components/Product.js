import { Component } from "react";

class Product extends Component {
  render() {
    let {match} = this.props;
    let name = match.params.name;
    return (
      <div className="container">
        <h1>Chi tiet san pham: {name}</h1>
      </div>
    );
  }
}

export default Product;
