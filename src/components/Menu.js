import { Component } from "react";
import { Link, useRouteMatch } from "react-router-dom";

class Menu extends Component {
  render() {
    let menus = [
      {
        to: "/",
        label: "Home",
        exact: true,
      },
      {
        to: "/about",
        label: "About",
        exact: false,
      },
      {
        to: "/products",
        label: "Products",
        exact: false,
      },
      {
        to: "/login",
        label: "Login",
        exact: false,
      },
    ];

    let result = menus.map((menu, index) => {
      return (
        <MenuLink
          key={index}
          label={menu.label}
          to={menu.to}
          activeOnlyWhenExact={menu.exact}
        />
        // <Link to={menu.to} className="nav-link">
        //   {menu.label}
        // </Link>
      );
    });

    return (
      <div className="container">
        <ul className="nav nav-pills">{result}</ul>
      </div>
    );
  }
}

let MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <li className="nav-item">
      <Link to={to} className={match ? "active nav-link" : "nav-link"}>
        {label}
      </Link>
    </li>
  );
};

export default Menu;
