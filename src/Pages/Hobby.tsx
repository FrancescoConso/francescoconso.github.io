export function Hobby() {
  return (
    <>
      <div className="container">
        <h1>Hobby Projects</h1>
        <h2>Live Coding</h2>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="src\assets\livecoding.jpg"
            ></img>
          </div>
          <div className="nine columns">
            <p>
              In 2023 I learned about Live Coding and I got immediately invested
              in it. I am especially interested in the visuals creation aspect
              of it. To the left here's one of the few (confused) pictures I
              took at the first event I attended as a musician / visualist in
              December 2023.
            </p>
          </div>
        </div>
        <h2>Game Development</h2>
        <p>
          Previous working experiences had me using Unity, and I keep on
          cultivating it as a hobby. I am also looking into Godot Engine, since
          it provides a freeware alternative to Unity. So far I published two
          small games:
        </p>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="https://img.itch.zone/aW1nLzEzMDM2NTEyLnBuZw==/315x250%23c/VMasdf.png"
            ></img>
          </div>
          <div className="nine columns">
            <h4>
              <a href="https://francescoconso.itch.io/office">
                office - liminal workday
              </a>
            </h4>
            <p>
              A short puzzle adventure inspired by the liminal spaces trend.
              Traverse an endless office without getting lost and clock out for
              the day.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="https://img.itch.zone/aW1nLzEzNDI2MjUzLnBuZw==/315x250%23c/lVL%2B%2BZ.png"
            ></img>
          </div>
          <div className="nine columns">
            <h4>
              <a href="https://francescoconso.itch.io/galaxy-score-attack">
                Galaxy Score Attack
              </a>
            </h4>
            <p>
              A game inspired by the classic space shooters of the 80s like
              Space Invaders, Galaxian and Galaga. You have 3 minutes to score
              as many points as you can against a barrage of bug-ships
              constantly sweeping at you. Dying won't cost you credits, but
              time.
            </p>
          </div>
        </div>
        <h2>Processing Sketches</h2>
        <p>
          I was introduced to Processing by a friend. The idea of having a
          programming language with easy graphic output was very interesting. I
          made a couple sketches, some with elements of sound reactivity. The
          more interesting ones can be found on{" "}
          <a href="https://github.com/FrancescoConso">my GitHub</a>.
        </p>
      </div>
    </>
  );
}
