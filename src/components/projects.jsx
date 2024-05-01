import { useEffect, useState } from 'react';
import '../style/projects.css';
import ProjectItem from './items/projectItem';

function Projects() {
    const [projectList, setProjectList] = useState(null);

    useEffect(() => {
        fetch("https://portfolio-app-basic-ad1a811d14f8.herokuapp.com/projects", {                
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
            dataType: 'json',
         })
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("server error");
          }
          return response.json();
        })
        .then((response) => {
            if(response && response.responseStatus === 'validRequest')
            {
                setProjectList(response.projects);
            }
        })
        .catch((error) => {
            throw new Error(error);
        })
    }, []);

    let projectContent = (<div className='loading-prompt'>Loading projects...</div>)

    if(projectList && projectList.length > 0)
    {
        projectContent = projectList.map((proj) => <ProjectItem key={proj._id} project={proj} lang='en'></ProjectItem>)
    } else if(projectList) {
        projectContent = (<div className='loading-prompt'>No projects available.</div>);
    }

    return <>
        <div className="project-holder">
            {projectContent}
        </div>
    </>
}

export default Projects