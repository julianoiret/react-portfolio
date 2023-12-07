/* eslint-disable react/jsx-no-target-blank */
const Contact = () => {
    return (
        <>
        <div className="container-right">
            <div id="contact">
                <h1>Contact</h1>
                <div className="box-contact">
                    <div className="contact">
                        <a href="mailto:julia.hanard@gmail.com" target="_blank"><i className="far fa-envelope-open logo-contact"></i></a>
                        <a href="mailto:julia.hanard@gmail.com" target="_blank" className="title-contact">julia.hanard@gmail.com</a>
                    </div>
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/julia-hanard-332395ab/" target="_blank"><i className="fab fa-linkedin-in logo-contact"></i></a>
                        <a href="https://www.linkedin.com/in/julia-hanard-332395ab/" target="_blank" className="title-contact">Linkedin Profile</a>
                    </div>
                    <div className="contact">
                        <a href="https://github.com/julianoiret" target="_blank"><i className="fab fa-github logo-contact"></i></a>
                        <a href="https://github.com/julianoiret" target="_blank" className="title-contact">Github Profile</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Contact;