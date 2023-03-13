import logo from './logo.svg';
import './App.css';
import LiPratice from "./Components/LiPratice/index"
import Datafetch from './Components/DataFetch/index';
import Click from './Components/Click/index';
import Hover from './Components/Hover';
function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>Javascript Fundamentals</h1>
          <LiPratice/>
          <Click/>
          <Hover/>
          <Datafetch/>
    </div>
  );
}

export default App;
