export function Hobby() {
  return (
    <>
      <div className="container">
        <h1>Hobby Projects</h1>
        {/* THIS COMMENT IS A SEPARATOR */}
        <h2>Godot Game Development</h2>
        <p>
          After controversial choices by Unity regarding their monetization
          approach, I decided to move on to Godot, strong of my unity knowledge
          to take advantage of its FOSS model and have full control over what I
          do and create with it.
        </p>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="https://img.itch.zone/aW1hZ2UvMjYyNDExMC8xNTYzNDI5Ny5wbmc=/original/UrUljn.png"
            ></img>
          </div>
          <div className="nine columns">
            <h4>
              <a href="https://francescoconso.itch.io/judgment-target-practice">
                Judgment: Target Practice
              </a>
            </h4>
            <p>
              My first complete project with Godot. A simple arcade shooter
              inspired by Hogan's Alley on the NES. In every round, each with a
              decreasing timer, hit the target that shows a criminal and not a
              civilian or a guard/policeman. It is also tested and compatible
              with the{" "}
              <a href="https://sindenlightgun.com/"> Sinden Lightgun.</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="assets/3dmaze.png"
            ></img>
          </div>
          <div className="nine columns">
            <h4>
              <a href="https://francescoconso.github.io/3d-maze/">
                3d-maze
              </a>
            </h4>
            <p>
              An experiment on deploying a Godot 3.5 application to a GitHub Pages website. It's also a tribute to the classic 3D Maze screensaver. Try to reach the center!
            </p>
          </div>
        </div>
        {/* THIS COMMENT IS A SEPARATOR */}
        <h2>Live Coding</h2>
        <div className="row">
          <div className="three columns">
            <img
              className="u-max-full-width hobby-image"
              src="assets/livecoding.jpg"
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
        {/* THIS COMMENT IS A SEPARATOR */}
        <h2>Unity Game Development</h2>
        <p>
          Previous work experiences had me using Unity, and I keep on
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
        {/* THIS COMMENT IS A SEPARATOR */}
        <h2>Processing Sketches</h2>
        <p>
          I was introduced to Processing by a friend. The idea of having a
          programming language with easy graphic output was very interesting.
          Over time I made different sketches, some with elements of sound
          reactivity. The more interesting ones code-wise are shown here. You
          can find their source code, along with more information of them on{" "}
          <a href="https://github.com/FrancescoConso">my GitHub</a>.
        </p>
        <div className="row">
          <div className="six columns">
            <video controls className="u-max-full-width">
              <source src="assets/Terraforming2.mp4" />
            </video>
          </div>
          <div className="six columns">
            <h4>
              <a href="https://github.com/FrancescoConso/terraforming2">
                Terraforming2
              </a>
            </h4>
            <p>
              Sound-reactive Processing sketch using the Minim library. Inspired
              by 80's wireframe graphics. The sketch takes left and right audio
              channels of an audio input, perform a Fourier Transform on it and
              uses the values to change the elevation of the grid spots to draw
              a "terraformed" grid based on the audio. The result is in the
              video shown to the left. Be aware that at the end of the song it
              will play some raw sounds that may damage your headphones or
              speakers if played too high.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="six columns">
            <img className="u-max-full-width" src="assets/EGAXmas.gif" />
          </div>
          <div className="six columns">
            <h4>
              <a href="https://github.com/FrancescoConso/EGAXmas">EGAXmas</a>
            </h4>
            <p>
              Think of it as a digital Christmas Postcard. The idea was to play
              with the limitations of EGA format (16 color, 640x360 maximum
              resolution) and make something that could be posted on social
              media for Christmas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
