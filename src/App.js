import logo from "./logo.svg";
import "./App.css";
import {
  HashRouter,
  BrowserRouter as HasRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <h1>Hello React Router</h1>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </HashRouter>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

export default App;
