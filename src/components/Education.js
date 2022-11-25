/* eslint-disable react/jsx-no-target-blank */
const Education = () => {
    return (
        <>
        <div className="container-right">
        <div id="education">
  <h1>Education</h1>
  <div className="card box-education">
    <div className="box-title-education">
      <div className="left-part">
        <img className="logo-education" src={require(`../images/le-wagon.png`)} alt="Le Wagon logo"></img>
        <h2>Le Wagon</h2>
      </div>
      <a href="https://www.lewagon.com/melbourne" target="_blank"><i class="fas fa-link"></i></a>
    </div>
    <div className="contenu">
      <h4>Web development | Full-time courses (10 weeks)</h4>
      <p className="what-is-it">Ranked as the World’s Best Coding Bootcamp for 4 years in a row (on Switchup and Coursereport), Le Wagon is a very product-driven program teaching the core concepts of programming and web development. During the course, I learnt how to build robust and beautiful web applications by myself, collaborate within a team of developers and adopt the technical workflow followed by successful startups.</p>
      <h5>Curriculum</h5>
      <ul>
        <li>Understand the core concepts of object-oriented programming</li>
        <li>Structure a software following design patterns like MVC</li>
        <li>Integrate a 3rd party service using an API or scrape HTML data</li>
        <li>Design a relational database and build queries with SQL</li>
        <li>Build a UI following atomic design framework</li>
        <li>Code a CSS library using recent techniques like flexbox or CSS grid</li>
        <li>ES6 (last version of Javascript) as a second programming language</li>
        <li>Adopt the right technical workflow: design a wireframe &#38; mockup, test a UX with a prototype, split a user stories across my team and collaborate with branch and pull requests with git and Github</li>
        <li>Discover TDD (Test Driven Development) and learn how to cover your application's code with unit tests</li>
      </ul>
      <h5>Accomplishments</h5>
      <ul>
        <li>Designed, implemented and shipped to production a clone of Airbnb in team of 4 people in 5 days</li>
        <li>Designed, implemented and shipped to production a Rails prototype of a web application</li>
      </ul>
    </div>
    <div className="box-date">
      <p className="date">April 2021 - June 2021 | Melbourne, Australia</p>
    </div>
  </div>

  <div className="card box-education">
    <div className="box-title-education">
      <div className="left-part">
        <img className="logo-education2" src={require(`../images/coursera.png`)} alt="Logo Coursera and University of Michigan"></img>
        <h2 className="responsive-education-title">Coursera | University of Michigan</h2>
      </div>
      <a href="https://www.coursera.org/specializations/web-design" target="_blank"><i className="fas fa-link"></i></a>
    </div>
    <div className="contenu">
      <h4>Web Design for Everybody: Basics of Web Development &#38; Coding Specialization</h4>
      <p className="what-is-it">This Specialization covers how to write syntactically correct HTML5 and CSS3, and how to create interactive web experiences with JavaScript. Mastering this range of technologies I'm now able to develop high quality web sites that, work seamlessly on mobile, tablet, and large screen browsers accessible, and that utilizes tools to create a site that is accessible to a wide audience, including those with visual, audial, physical, and cognitive impairments.</p>
      <h5>Curriculum</h5>
      <ul>
        <li>Add interacitivity to web pages with Javascript</li>
        <li>Use the Document Object Model to modify pages</li>
        <li>Describe the basics of Cascading Style Sheets</li>
        <li>Apply responsive design to enable page to be viewed by various devices</li>
      </ul>
      <h5>Accomplishment</h5>
      <ul>
        <li>Designed an accessible and responsive website</li>
      </ul>
    </div>
    <div className="box-date">
      <p className="date">2019 - 2020 | Online, on my free time</p>
    </div>
  </div>

  <div className="card box-education">
    <div className="box-title-education">
      <div className="left-part">
        <img className="logo-education" src={require(`../images/iaelille.png`)} alt="Logo IAE Lille, University School of Management"></img>
        <h2>IAE Lille</h2>
      </div>
      <a href="https://iaelille.fr/" target="_blank"><i className="fas fa-link"></i></a>
    </div>
    <div className="contenu">
      <h4>University School of Management: Bachelor of Business Administration</h4>
      <p className="what-is-it">The bachelor LPMO (Business Administration) is designed to develop the skills required for careers in business and management. IAE Lille has been providing a world class education since 1956.</p>
      <h5>Curriculum</h5>
      <ul>
        <li>Leadership</li>
        <li>Marketing</li>
        <li>Global Business Economics</li>
        <li>Financial and Managerial Accounting</li>
        <li>Business Finance</li>
        <li>Data Analysis</li>
        <li>Managing People</li>
      </ul>
      <h5>Accomplishment</h5>
      <ul>
        <li>Submission of a thesis: How to improve customer loyalty and retention</li>
        {/* <li>IN FRENCH: Comment améliorer la fidélisation client par l’intermédiaire du marketing relationnel ?</li> */}
      </ul>
    </div>
    <div className="box-date">
      <p className="date">Completed in 2014 | Lille, France</p>
    </div>
  </div>
</div>
</div>
        </>
    )
};

export default Education;