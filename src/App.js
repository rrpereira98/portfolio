import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom" style={{backgroundColor: "#020406"}}>
        <div class="container">
          <a className="navbar-brand" href="#">
            <img src={require("./assets/images/profile.png")} alt="Bootstrap" width="60" height="60" id='photo'/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a id='resume' className="nav-link" href="#">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='container-fluid' id='intro'>
        <div className='container'>
          <h1>Hello,<br/>My name is <span>Rodrigo</span></h1>
          <h2>And I am a web developer</h2>
        </div>
      </div>

      <div className='container-fluid' id='projects'>
        <div className='container'><h3>Projects</h3></div>
        <div className='container'>
          <div className='project' id='project1'>
            <div className="card" style={{width: "auto"}}>
              <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='project' id='project2'>
            <div className="card" style={{width: "auto"}}>
              <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='project' id='project3'>
            <div className="card" style={{width: "auto"}}>
              <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
          <div className='project' id='project4'>
            <div className="card" style={{width: "auto"}}>
              <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
