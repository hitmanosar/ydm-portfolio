import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './component/Nav';
import './style/nav.css';
import './style/but.css';

function App() {
  return (
    <div className="App">
        <Nav/>
      <Home/>
    </div>
  );
}

export default App;
