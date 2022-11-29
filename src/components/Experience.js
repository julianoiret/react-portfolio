import { experienceData } from "../data";

const Experience = () => {

    return (
        <>
        <div className="container-right">
            <div id="experience">
                <h1>Experience</h1>
                <div className="row card-principal">
                    {experienceData.map((work) => {
                        const { id, job, date, description, where } = work;
                        return (
                        <div className="card card-experience" style={{width: "45%"}}>
                            <div className="card-body" id={id}>
                                <h5 className="card-title">{job}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{date}</h6>
                                <p className="card-text">{description}</p>
                                <h6 className="card-subtitle mb-2 text-muted">{where}</h6>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
        </>
    )
};

export default Experience;