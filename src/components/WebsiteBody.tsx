import { NotFound } from "./NotFound";
import { Curriculum } from "../Pages/Curriculum";
import { Hobby } from "../Pages/Hobby";
import { Contact } from "../Pages/Contact";
import { useState } from "react";

export function WebsiteBody() {
  const [page, setPage] = useState<string>("/");

  function renderSwitch(page: string) {
    switch (page) {
      case "/":
        return <Curriculum></Curriculum>;
        break;
      case "/hobby":
        return <Hobby></Hobby>;
        break;
      case "/contact":
        return <Contact></Contact>;
        break;
      default:
        return <NotFound></NotFound>;
        break;
    }
  }

  return (
    <>
      <div className="container with-bottom-border">
        <div className="row center-text">
          <div className="three columns">
            <h5>
              {/*<Link to="/">Curriculum</Link>*/}
              <a onClick={() => setPage("/")}>Curriculum</a>
            </h5>
          </div>
          <div className="three columns">
            <h5>
              {/* <Link to="/hobby">Hobby Projects</Link> */}
              <a onClick={() => setPage("/hobby")}>Hobby Projects</a>
            </h5>
          </div>
          <div className="three columns">
            <h5>
              {/* <Link to="/contact">Contact</Link> */}
              <a onClick={() => setPage("/contact")}>Contact</a>
            </h5>
          </div>
          <div className="three columns">
            <h5>Coming Soon</h5>
          </div>
        </div>
      </div>
      {renderSwitch(page)}
      {/* <Routes>
        <Route path="/" element={<Curriculum />}></Route>
        <Route path="/hobby" element={<Hobby />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes> */}
    </>
  );
}
