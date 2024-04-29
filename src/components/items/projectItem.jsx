import { Fragment } from 'react';
import '../../style/projectItem.css';
import PropTypes from 'prop-types';

function TagItem({tag}) {
    return <Fragment>
        <div className='project-tag'>{tag}</div>
    </Fragment>
}

TagItem.propTypes = {
    tag: PropTypes.string
}

function ProjectItem({project}) {
    const projectTagContents = project.tags.map((tag) => <TagItem key={tag} tag={tag}></TagItem>);
    return <>
        <section className='project-item'>
            <div className='project-image'>
                <img src={project.image} />
            </div>
            <div className='project-content'>
                <div className='project-name'>{project.name}</div>
                <div className='project-tags'>{projectTagContents}</div>
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