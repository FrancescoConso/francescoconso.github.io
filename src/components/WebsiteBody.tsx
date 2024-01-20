import { Link, Routes, Route } from "react-router-dom";

import { NotFound } from "./NotFound";
import { Curriculum } from "../Pages/Curriculum";
import { Hobby } from "../Pages/Hobby";
import { Contact } from "../Pages/Contact";


export function WebsiteBody() {
  return (
    <>
      <div className="container with-bottom-border">
        <div className="row center-text">
          <div className="three columns">
            <h5>
              <Link to="/">Curriculum</Link>
            </h5>
          </div>
          <div className="three columns">
            <h5>
              <Link to="/hobby">Hobby Projects</Link>
            </h5>
          </div>
          <div className="three columns">
            <h5>
              <Link to="/contact">Contact</Link>
            </h5>
          </div>
          <div className="three columns">
            <h5>Coming Soon</h5>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Curriculum />}></Route>
        <Route path="/hobby" element={<Hobby />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
