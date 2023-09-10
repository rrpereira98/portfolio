function Navbar() {
    return (
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
                    <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
                <li className="nav-item">
                    <a id='resume' className="nav-link" href="#">Resume</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar