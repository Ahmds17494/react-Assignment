import logo from './logo.svg';
import './App.css';
import Home from './component/screen/Home'
import Nav from './component/layout/Nav'
import Footer from './component/layout/Footer'

import './css/App.css';

function App() {
  return (
    <div className="App">

      {/* NavBar */}
      <Nav/>

      {/* Home Screen */}
      <Home/>

      {/* Footer */}
      <Footer />

    </div>  
  );
}

export default App;
