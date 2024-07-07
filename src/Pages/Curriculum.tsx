export function Curriculum() {
  return (
    <>
      <div className="container">
        <h1>Curriculum Vitae</h1>
        {/*  This comment is a separator */}
        <div className="row with-bottom-border">
          <div className="two columns bold-bigger">
            <p>IT Engineer</p>
          </div>
          <div className="two columns italic">
            <p>Lunitek S.R.L.</p>
            <p>April 2024 - Today </p>
          </div>
          <div className="six columns">
            <p>
              R&D work on new features and Quality of Life improvements for the seismographs produced by Lunitek.
            </p>
            <p>
              Graphical interface for projects commissioned by external partners. Communication of said interface with the hardware system using MQTT protocol.
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>Python</li>
              <li>Javascript</li>
              <li>React.js</li>
            </ul>
          </div>
        </div>
        {/*  This comment is a separator */}
        <div className="row with-bottom-border">
          <div className="two columns bold-bigger">
            <p>Software Developer</p>
          </div>
          <div className="two columns italic">
            <p>La Spezia Container Terminal</p>
            <p>September 2023 - March 2024 </p>
          </div>
          <div className="six columns">
            <p>
              Full-stack development of software modules for a new
              microservice-based management software for the handling of the
              Terminal's core business.
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React.js</li>
              <li>Spring Framework</li>
            </ul>
          </div>
        </div>
        {/*  This comment is a separator */}
        <div className="row with-bottom-border">
          <div className="two columns bold-bigger">
            <p>Software Developer</p>
          </div>
          <div className="two columns italic">
            <p>BK s.r.l. - Brain and Knowledge</p>
            <p>May 2022 - July 2023</p>
          </div>
          <div className="six columns">
            <p>
              Analysis and development of a VR-Based application, based on a
              serious game model, for divers' training as part of a research
              project.
            </p>
            <p>
              Analysis of the system's structural requirements and of the
              gamified solution, development of the training environment in
              Unity Engine and integration of data provided by the motion
              capture software Vicon Tracker - later changed to TheCaptury - for
              movement and interaction inside the environment.
            </p>
            <p>
              Analysis and development of training scenarios based on data
              provided by partners. Maintenance work on a Unity - Java hybrid
              application for Life Support Technician training.
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>C#</li>
              <li>Java</li>
              <li>Mono Framework</li>
              <li>Unity Engine</li>
            </ul>
          </div>
        </div>
        {/*  This comment is a separator */}
        <div className="row with-bottom-border">
          <div className="two columns bold-bigger">
            <p>Graduation</p>
          </div>
          <div className="two columns italic">
            <p>Università di Pisa</p>
            <p>April 2022</p>
          </div>
          <div className="six columns">
            <p>Graduated with 100/100. </p>
            <p>
              Thesis developed at BK s.r.l. - Brain and Knowledge named
              "BoardFrame - Un Framework per Giochi da Tavolo Digitali"
              ("BoardFrame - A Framework for Digital Board Games")
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>C#</li>
              <li>Mono Framework</li>
              <li>Unity Engine</li>
            </ul>
          </div>
        </div>
        {/*  This comment is a separator */}
        <div className="row with-bottom-border">
          <div className="two columns bold-bigger">
            <p>Software Developer</p>
          </div>
          <div className="two columns italic">
            <p>BK s.r.l. - Brain and Knowledge</p>
            <p>June 2021 - August 2021</p>
          </div>
          <div className="six columns">
            <p>
              Development of a web application based on the MVC model for an
              insurance company and implementation of new features in the
              company intranet application.
            </p>
            <p>
              Expansion of the application with new features as requested by the
              customer. Full stack development of dynamic web pages with AJAX
              interactions and interactions with legacy database.
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>Java</li>
              <li>Javascript</li>
              <li>JQuery</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
        {/*  This comment is a separator */}
        {/* <div className="row with-bottom-border"> */}
        <div className="row ">
          <div className="two columns bold-bigger">
            <p>Management Consultant</p>
          </div>
          <div className="two columns italic">
            <p>Capgemini</p>
            <p>Sept 2014 - March 2015 (Stage)</p>
          </div>
          <div className="six columns">
            <p>
              Development of web application for warehouse management, using
              .NET technology.{" "}
            </p>
            <p>
              Expansion of the application with new features as requested by the
              customer. Development of a module for query result export to
              spreadsheet using the Open Office XML format.
            </p>
          </div>
          <div className="two columns">
            <ul>
              <li>Asp.NET</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
