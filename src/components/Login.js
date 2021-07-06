import { Component } from "react";
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLogin: false
    };
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = name === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  login = (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    if( username === 'admin' && password ==='admin') {
      this.setState({
        isLogin: true,
      });
    }
  };

  render() {
    let {location, match} = this.props;
    let name = match.params.name;
    let pathname = name ? `/products/${name}` : "/products";
    let { username, password } = this.state;
    if (this.state.isLogin) {
      return <Redirect to={{
        pathname : pathname,
        from: location
      }} />;
    }

    return (
      <div className="container col-6">
        <form className="form-group border p-3 m-3" onSubmit={this.login}>
          <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">
              UserName
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                readonly
                className="form-control"
                name="username"
                value={username}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                name="password"
                autocomplete="on"
                value={password}
                onChange={this.onChange}
              />
            </div>
          </div>
          <div className="mb-3 row ">
            <button className="btn btn-primary col-2 center" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
