import logo from './logo.svg';
import './App.css';
import Home from './container/Home';
import Description from './container/Description';
import Project from './container/Project';
import Footer from './container/Footer';

function App() {
  return (
    <div className="App">

      <Home/>
      <Description/>
      <Project/>
      <Footer/>

    </div>
  );
}

export default App;
