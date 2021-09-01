import './App.css';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-action';
import { Component } from 'react';



class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser() {
    this.props.dispatch(updateUser('Ulugbek'));
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.props.user}</h1>
          <button onClick={this.onUpdateUser}>Update User</button>
        </header>

      </div>
    );
  }
}

const mapStateToProp = state => {
  return state;
}

// const mapStateToProp = state => ({
//   products: state.products
// })

export default connect(mapStateToProp)(App);
