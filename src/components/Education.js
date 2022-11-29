/* eslint-disable react/jsx-no-target-blank */
import { educationData } from "../data";

const Education = () => {
    return (
        <>
        <div className="container-right">
            <div id="education">
                <h1>Education</h1>
                {educationData.map((learning) => {
                const { id, logo, name, website, title, description, curriculum, accomplishment, time } = learning;
                  return (
                  <div className="card box-education">
                    <div className="box-title-education">
                        <div className="left-part">
                            <img className={id === 3 ? 'logo-education2' : 'logo-education'} src={logo} alt={name}></img>
                            <h2>{name}</h2>
                        </div>
                        <a href={website} target="_blank"><i class="fas fa-link"></i></a>
                    </div>
                    <div className="contenu">
                        <h4>{title}</h4>
                        <p className="what-is-it">{description}</p>
                        <h5>Curriculum</h5>
                        <ul>
                            {curriculum.map((learningDetail, index) => {
                                return (
                                <li key={index}>{learningDetail}</li>
                                );
                            })}
                        </ul>
                        <h5>Accomplishments</h5>
                        <ul>
                            {accomplishment.map((detail, index) => {
                                return (
                                <li key={index}>{detail}</li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="box-date">
                        <p className="date">{time}</p>
                    </div>
                </div>
                 );
                })}
            </div>
        </div>
        </>
    )
};

export default Education;