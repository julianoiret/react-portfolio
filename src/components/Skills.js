/* eslint-disable jsx-a11y/alt-text */
const Skills = () => {
    return (
        <>
                <div className="container-right">
        <div id="skills">
    <h1>Skills</h1>
    <div class="box-skills">
      <h2>Front-end</h2>
      {/* <hr> */}
      <div class="flex-skills">
        <div class="container-skills">
          <img class="size1" src="./img/html.png"></img>
          <p>HTML5</p>
        </div>
        <div class="container-skills">
          <img class="size1" src="./img/css.png"></img>
          <p>CSS3</p>
        </div>
        <div class="container-skills">
          <img class="size2" src="./img/js.png"></img>
          <p>JavaScript</p>
        </div>
        <div class="container-skills">
          <img class="size2" src="./img/bootstrap.png"></img>
          <p>Bootstrap</p>
        </div>
      </div>
    </div>

    <div class="box-skills">
      <h2>Back-end</h2>
      {/* <hr> */}
      <div class="flex-skills flex-start">
        <div class="container-skills">
          <img class="size2 flex1" src="./img/ruby.png"></img>
          <p>Ruby</p>
        </div>
        <div class="container-skills">
          <img class="size1 flex1" src="./img/rails.png"></img>
          <p>Ruby on Rails</p>
        </div>
      </div>
    </div>

    <div class="box-skills">
      <h2>Other</h2>
      {/* <hr> */}
      <div class="flex-skills">
        <div class="container-skills">
          <img class="size2" src="./img/git.png"></img>
          <p>Git</p>
        </div>
        <div class="container-skills">
          <img class="size2" src="./img/github.png"></img>
          <p>Github</p>
        </div>
        <div class="container-skills">
          <img class="size2" src="./img/heroku.png"></img>
          <p>Heroku</p>
        </div>
        <div class="container-skills">
          <img class="size2" src="./img/figma.png"></img>
          <p>Figma</p>
        </div>
      </div>
    </div>

    <div class="box-skills">
      <h2>Current focus</h2>
      {/* <hr> */}
      <div class="flex-skills flex-start">
        <div class="container-skills">
          <img class="size3 flex1" src="./img/uiux-design.png"></img>
          <p>UX UI Design</p>
        </div>
        <div class="container-skills">
          <img class="size1 flex1" src="./img/react.png"></img>
          <p>React</p>
        </div>
        <div class="container-skills">
          <img class="size2 flex2" src="./img/sass.png"></img>
          <p>SASS</p>
        </div>
      </div>
    </div>
  </div>
  </div>
        </>
    )
};

export default Skills;