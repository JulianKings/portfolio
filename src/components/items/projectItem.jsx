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

function ProjectItem({project, lang}) {
    const projectTagContents = project.tags.map((tag) => <TagItem key={tag} tag={tag}></TagItem>);
    
    const previewPrompt = (lang && lang === 'es') ? 'Previsualizar' : 'Preview';
    
    return <>
        <section className='project-item'>
            <div className='project-image'>
                <img src={project.image} />
            </div>
            <div className='project-content'>
                <div className='project-name'>{(lang && lang === 'es') ? project.name_es : project.name}</div>
                <div className='project-tags'>{projectTagContents}</div>
                <div className='project-description'>
                    {(lang && lang === 'es') ? project.description_es : project.description}
                </div>
                <div className='project-links'>
                    <a href={project.preview_link} className='project-preview' target="_blank">{previewPrompt}</a>
                    <a href={project.github_link} className='project-github' target="_blank">Github</a>
                </div>
            </div>
        </section>
    </>;
}

ProjectItem.propTypes =  {
    project: PropTypes.object,
    lang: PropTypes.string
}

export default ProjectItem;