/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

const Project = ({ id, photo, projectName, projectYear, projectDescription, skills, accomplishments, note, webLink, github, youtube }) => {
    const [flipCard, setFlipCard] = useState(false);
    return (
    <>
    <div key={id} className={flipCard ? 'hidden' : 'col-md-4 card box'}>
        <img src={photo}></img>
        <h2>{projectName}</h2>
        <p className="release">Release: {projectYear}</p>
        <p>{projectDescription}</p>
        <button class="read-more-button btn-green-2" role="button" onClick={() => setFlipCard(true)}>Read more <i className="fas fa-long-arrow-alt-right"></i></button>
    </div>
    <div className={!flipCard ? 'hidden' : 'col-md-4 card box box-4'}>
        <h2 className="accomplishments">Accomplishments</h2>
        <i className="fas fa-times close-button" onClick={() => setFlipCard(false)}></i>
        <div className="skills-section">
            {skills.map((skill) => {
                return (
                <p className="skill-badge">{skill}</p>
                    );
            })}
        </div>
        {accomplishments.map((accomplishment) => {
            return (
            <p className="check"><i className="fas fa-check"></i>{accomplishment}</p>
            );
        })}
        <p><i className="note">{note}</i></p>
        <div className="icons-link">
            <a href={webLink} target="_blank"><i className="fas fa-external-link-alt"></i></a>
            <a href={github} target="_blank"><i className="fab fa-github"></i></a>
            {youtube && (
            <a href={youtube} target="_blank"><i className="fab fa-youtube"></i></a>
            )}
        </div>
    </div>
    </>
    );
}

export default Project;