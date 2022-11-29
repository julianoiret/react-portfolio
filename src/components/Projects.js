import { projectsData } from "../data";
import Project from "./Project";

const Projects = () => {


    return (
        <>
        <div className="container-right">
        <div id="projects">
        <h1>Projects</h1>
        <div id="boxes" class="row">
            {projectsData.map((project) => {
                return <Project key={project.id}{...project}/>

            })}
            
        </div>
        </div>
        </div>
        </>
    )
};

export default Projects;