/* eslint-disable jsx-a11y/alt-text */
const Skills = () => {
    return (
        <>
        <div className="container-right">
            <div id="skills">
                <h1>Skills</h1>
                <div className="box-skills">
                    <h2>Tech Stack</h2>
                    <div className="border"></div>
                    <div className="flex-skills">
                        <div className="container-skills">
                            <img src={require(`../images/react.png`)} style={{width: '70px'}}></img>
                            <p>React</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/js.png`)} style={{width: '68px'}}></img>
                            <p>Javascript</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/typescrypt.png`)} style={{width: '65px'}}></img>
                            <p>Typescript</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/css.png`)} style={{width: '62px'}}></img>
                            <p>CSS3</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/styled-components.png`)} style={{width: '66px'}}></img>
                            <p>styled-component</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/sass.png`)} style={{width: '80px'}}></img>
                            <p>Sass</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/jest.png`)} style={{width: '70px'}}></img>
                            <p>Jest</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/octopus.png`)} style={{width: '70px'}}></img>
                            <p>Testing Library</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/html.png`)} style={{width: '63px'}}></img>
                            <p>HTML5</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/graphQL.png`)} style={{width: '73px'}}></img>
                            <p>GraphQL</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/ruby.png`)} style={{width: '65px'}}></img>
                            <p>Ruby</p>
                        </div>
                        <div className="container-skills">
                            <img src={require(`../images/rails.png`)} style={{width: '58px'}}></img>
                            <p>Ruby on Rails</p>
                        </div>
                    </div>
                </div>
                <div className="box-skills">
                    <h2>Other</h2>
                    <div className="border"></div>
                    <div className="flex-skills">
                        <div className="container-skills">
                            <img src={require(`../images/git.png`)} style={{width: '82px'}}></img>
                            <p>Git</p>
                        </div>
                    <div className="container-skills">
                        <img src={require(`../images/github.png`)} style={{width: '80px'}}></img>
                        <p>Github</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/figma.png`)} style={{width: '79px'}}></img>
                        <p>Figma</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/optimizely.png`)} style={{width: '76px'}}></img>
                        <p>Optimizely</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/bootstrap.png`)} style={{width: '76px'}}></img>
                        <p>Bootstrap</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/heroku.png`)} style={{width: '74px'}}></img>
                        <p>Heroku</p>
                    </div>
                </div>
            </div>
            <div className="box-skills">
                <h2>Current focus</h2>
                <div className="border"></div>
                <div className="flex-skills flex-start">
                    <div className="container-skills">
                        <img src={require(`../images/uiux-design.png`)} style={{width: '130px'}}></img>
                        <p>UX UI Design</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/scala.png`)} style={{width: '50px'}}></img>
                        <p>Scala</p>
                    </div>
                    <div className="container-skills">
                        <img src={require(`../images/accessibility.png`)} style={{width: '80px'}}></img>
                        <p>Accessibility</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
};

export default Skills;