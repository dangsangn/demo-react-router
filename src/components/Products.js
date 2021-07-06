import { Component } from "react";
import { Link} from "react-router-dom";

class Products extends Component {
  render() {
    let products = [
      {
        name: "Iphone 12 Pro Max",
        brand: "iphone",
        price: 1000,
      },
      {
        name: "Samsum S21 Ultra",
        brand: "samsum",
        price: 1100,
      },
      {
        name: "Google Pixel 4XL",
        brand: "google",
        price: 700,
      },
    ];

    let {match, location} = this.props;
    console.log(match);
    console.log(location);
    let result = products.map((product, index) => {
      return (
        <li className="list-item" key={index}>
          <Link to={`/login/${product.brand}`} className="nav-link">
            {product.name} - Design by {product.brand} - Price:{product.price}
          </Link>
        </li>
      );
    });

    return (
      <div className="container">
        <h1>Đây là trang Products</h1>
        <ul className="list-group">{result}</ul>
      </div>
    );
  }
}

export default Products;

