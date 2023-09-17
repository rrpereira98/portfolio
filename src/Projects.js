import { Reveal } from "./Animations"

function Projects() {
    const projectsList = [{projectNumber: 1, src: require("./assets/images/index_footpick 1.png")}, {projectNumber: 2, src: require("./assets/images/index_footpick 1.png")}, {projectNumber: 3, src: require("./assets/images/index_footpick 1.png")}, {projectNumber: 4, src: require("./assets/images/index_footpick 1.png")}]

    const ProjectCard = projectsList.map(project => {
        return (
            <Reveal>
            <div className='project' id={`project${project.projectNumber}`}>
                <div className="card" style={{width: "auto"}}>
                    <img src={project.src} className="card-img-top" alt="..."/>
                </div>
            </div>
            </Reveal>
        )
    })

    return (
        <div className='container-fluid' id='projects'>
            <div className='container'><h3>Projects</h3></div>
            <div className='container'>
                {ProjectCard}
            </div>
        </div>
    )
}

export default Projects