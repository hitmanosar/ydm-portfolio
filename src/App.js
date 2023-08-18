import logo from './logo.svg';
import './App.css';
import Home from './page/home';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from './component/Nav';
import './style/nav.css';
import './style/but.css';
import Foot from './component/Foot';
import './style/footer.css';

import Gotop from './component/Gotop';


function App() {

 
  return (
    <div className="App">
        <Nav/>
      <Home/>
      <Gotop/>
   <Foot/>
    
    </div>
  );
}

export default App;
