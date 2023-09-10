function Projects() {
    return (
        <div className='container-fluid' id='projects'>
            <div className='container'><h3>Projects</h3></div>
            <div className='container'>
            <div className='project' id='project1'>
                <div className="card" style={{width: "auto"}}>
                <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
                </div>
            </div>
            <div className='project' id='project2'>
                <div className="card" style={{width: "auto"}}>
                <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
                </div>
            </div>
            <div className='project' id='project3'>
                <div className="card" style={{width: "auto"}}>
                <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
                </div>
            </div>
            <div className='project' id='project4'>
                <div className="card" style={{width: "auto"}}>
                <img src={require("./assets/images/index_footpick 1.png")} className="card-img-top" alt="..."/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects