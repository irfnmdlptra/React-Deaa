import { useRef } from 'react';
import logo from './Image/trns1.png';
import './Styles/UseRef.css';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Progres Nomor satu</h2>
        <p>Tidak Boleh Tidur Dijam Progres</p>
      </header>
    </div>
  );
}

export default App;
