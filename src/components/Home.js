import {Component} from 'react'
import {Prompt} from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.props.match);
    return (
      <div className="container">
        <h1>Đây là trang Home</h1>
        <Prompt 
          when={true}
          message="Are you sure you want to leave?" 
        />
      </div>
    );
  }
  
}

export default Home;