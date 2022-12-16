const ResponsiveNav = () => {
    return (
        <>
         <div class="responsive-nav">
    <button class="responsive-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1"><i class="fas fa-bars"></i></button>
    <div class="middle">
      <h1>Julia Hanard</h1>
      <h2>Software Developer</h2>
    </div>
  </div>

  <div className="row">
    <div className="col">
      <div className="collapse multi-collapse" id="multiCollapseExample1">
        <div className="card card-body">
          <div id="menu">
            <div className="sidebar sidebar-1">
              <i className="fas fa-user icon-menu fa-2x" id="icon-1"></i>
              <a href="#about" className="active">About</a>
            </div>
            <div className="sidebar sidebar-2">
              <i className="fas fa-rocket icon-menu fa-2x" id="icon-2"></i>
              <a href="#projects">Projects</a>
             </div>
            <div className="sidebar sidebar-3">
              <i className="fas fa-chart-bar icon-menu fa-2x" id="icon-3"></i>
              <a href="#skills" className="active">Skills</a>
            </div>
            <div className="sidebar sidebar-4">
              <i className="fas fa-graduation-cap icon-menu fa-2x" id="icon-4"></i>
              <a href="#education">Education</a>
            </div>
            <div className="sidebar sidebar-5">
              <i className="fas fa-suitcase icon-menu fa-2x" id="icon-5"></i>
              <a href="#experience">Experience</a>
            </div>
            <div className="sidebar sidebar-6">
              <i className="fas fa-cut icon-menu fa-2x" id="icon-6"></i>
              <a href="#interests">Interests</a>
            </div>
            <div className="sidebar sidebar-7">
              <i className="fas fa-envelope icon-menu fa-2x" id="icon-7"></i>
              <a href="#contact">Contact</a>
            </div>
            <div className="sidebar sidebar-8">
              <i className="fas fa-file icon-menu fa-2x" id="icon-8"></i>
              <a href="" download target="_blank">Resume (coming soon)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
};

export default ResponsiveNav;