import { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from './components/Menu';
import routers from './routers'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <Switch>
            { this.showRouters(routers) }
          </Switch>
        </div>
      </Router>
    );
  }

  showRouters = (routers)=> {
      let result = null;
      if(routers.length > 0 ) {
          result = routers.map((route, index) =>{
            return (
                <Route path = {route.path} exact = {route.exact}>
                    {route.main}
                </Route>
            )
          });
      }
      return result;
  }
}  

export default App;
