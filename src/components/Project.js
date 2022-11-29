/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";

const Project = ({ id, photo, projectName, projectDescription, skills, accomplishments, note, webLink, github, youtube, button }) => {
    const [flipCard, setFlipCard] = useState(false);
    return (
                    <>
                    <div key={id} className={flipCard ? 'hidden' : 'col-md-4 card box'}>
                        <img src={photo}></img>
                        <h2>{projectName}</h2>
                        <p>{projectDescription}</p>
                        <button class="read-more-button btn-green-2" role="button" onClick={() => setFlipCard(true)}>Read more <i class="fas fa-long-arrow-alt-right"></i></button>
                        {/* <button class="read-more-button btn-green-2" role="button" onClick={() => handleClick(button)}>{button} <i class="fas fa-long-arrow-alt-right"></i></button> */}
                    </div>
            <div className={!flipCard ? 'hidden' : 'col-md-4 card box box-4'}>
                <h2 class="accomplishments">Accomplishments</h2>
                <i class="fas fa-times close-button" onClick={() => setFlipCard(false)}></i>
                {/* <i class="fas fa-times close-button" onClick={() => !handleClick(button)}></i> */}
                {accomplishments.map((accomplishment) => {
                    return (
                        <p class="check"><i class="fas fa-check"></i>{accomplishment}</p>
                    );
                })}
                <p><i class="note">{note}</i></p>
                <div class="icons-link">
          <a href={webLink} target="_blank"><i class="fas fa-external-link-alt"></i></a>
          <a href={github} target="_blank"><i class="fab fa-github"></i></a>
          {youtube && (
          <a href={youtube} target="_blank"><i class="fab fa-youtube"></i></a>
          )}
        </div>
            </div>
            </>
                );
  
}

export default Project;