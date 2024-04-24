import '../../style/projectItem.css';
import PropTypes from 'prop-types';

function ProjectItem({project}) {
    return <>
        <section className='project-item'>
            <div className='project-image'>
                <img src={project.image} />
            </div>
            <div className='project-content'>
                <div className='project-name'>{project.name}</div>
                <div className='project-description'>
                    {project.description}
                </div>
                <div className='project-links'>
                    <a href={project.preview_link} className='project-preview' target="_blank">Preview</a>
                    <a href={project.github_link} className='project-github' target="_blank">Github</a>
                </div>
            </div>
        </section>
    </>;
}

ProjectItem.propTypes =  {
    project: PropTypes.object
}

export default ProjectItem;