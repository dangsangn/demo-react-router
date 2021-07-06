import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Login from "./components/Login";
import Product from "./components/Product";
let routers = [
  {
    path: "/",
    exact: true,
    main: () => {
      return <Home />;
    },
  },
  {
    path: "/about",
    exact: false,
    main: () => {
      return <About />;
    },
  },
  {
    path: "/products",
    exact: true,
    main: ({ match, location }) => {
      return <Products match={match} location={location} />;
    },
  },
  {
    path: "/products/:name",
    exact: true,
    main: ({ match, location }) => {
      return <Product match={match} location={location} />;
    },
  },
  {
    path: "/login",
    exact: true,
    main: ({ location, match }) => {
      return <Login location={location} match={match} />;
    },
  },
  {
    path: "/login/:name",
    exact: false,
    main: ({ location, match }) => {
      return <Login location={location} match={match} />;
    },
  },
  {
    path: "",
    exact: false,
    main: () => {
      return <NotFound />;
    },
  },
];

export default routers;
