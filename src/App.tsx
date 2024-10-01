import logo from './logo.svg';
import './App.css';
import { QrReader } from './Components/QrScanner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reloa.
        </p>

        <input title='Enter here' id="my-input"/>
        <QrReader />
      </header>
    </div>
  );
}

export default App;
