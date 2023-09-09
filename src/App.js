import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar" style={{backgroundColor: "#020406"}}>
        <div div class="container">
          <a class="navbar-brand" href="#">
            <img src={require("./assets/images/profile.png")} alt="Bootstrap" width="30" height="24"/>
          </a>
        </div>
      </nav>

      <div className='container-fluid' id='intro'>
        <div className='container'>
          <h1>Hello,<br/>My name is <span>Rodrigo</span></h1>
          <h2>And I am a web developer</h2>
        </div>
      </div>

      <div className='container-fluid' id='projects'>
        <div className='container'>
          
        </div>
      </div>
    </div>
  );
}

export default App;
