
import { useOutletContext } from 'react-router-dom';
import Projects from './projects';
import Projects_ES from './projects_es';

function ProjectManager()
{
    const [currentLang] = useOutletContext();

    if(currentLang && currentLang === 'en')
    {
        return <Projects />
    } else {
        return <Projects_ES />
    }
}

export default ProjectManager;