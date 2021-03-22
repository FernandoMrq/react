import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

    handlePClick = this.handlePClick.bind(this);

    state = {
      name :'Fernando Marques',
      counter: 0
    };
  

  handlePClick() {
    this.setState({name:'novo nome'});
    console.log(`<p> clicado ${this.state.name}`);
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
    console.log(this.state.counter);
  }

  render() {

      const { name, counter } = this.state;

      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {name} {counter}
          </p>
          <a
            onClick = { this.handleAClick }
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link {/* {counter} */}
          </a>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
