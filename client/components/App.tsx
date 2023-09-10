// import { useFruits } from '../hooks/useFruits'

function App() {
  //   const { data } = useFruits()
  const linkedUrlLinkedin = `https://www.linkedin.com/in/storm-harris-studdart-803930208/`
  const linkedUrlGitHub = `https://github.com/StormHS?tab=repositories`
  const linkedUrlApprendre = `http://stormlefrancais.devacademy.nz/`
  const linkedUrlToDo = `https://to-do-to-day.pushed.nz/`

  return (
    <>
      <div className="app">
        <div className="wrap-container">
          <img
            className="storm-img"
            src="../client/Images/storm.jpg"
            alt="Image of Storm"
          />
          <div className="head-cv">
            <h1>Storm Harris-Studdart</h1>
            <h2>Portfolio</h2>
            <p>
              Tēnā koe!🌻 as a trained junior software engineer, I bring a
              unique blend of senior leadership experience and a background in
              social work. I can't wait to bring this social work knowledge into
              the tech industry. Checkout my Portfolio for more about my mahi so
              far!
            </p>
            <button className="buttons">
              <a
                style={{ textDecoration: 'none', color: 'whitesmoke' }}
                href="../client/Images/Storm Resume 2023.pdf"
                download
              >
                CV
              </a>
            </button>
            <button className="buttons">
              <a
                style={{ textDecoration: 'none', color: 'whitesmoke' }}
                href={linkedUrlLinkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </button>
            <button className="buttons">
              <a
                style={{ textDecoration: 'none', color: 'whitesmoke' }}
                href={linkedUrlGitHub}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2 className="break">Current Projects:</h2>

        <button className="buttons">
          <a
            style={{ textDecoration: 'none', color: 'whitesmoke' }}
            href={linkedUrlToDo}
            target="_blank"
            rel="noreferrer"
          >
            To Do To Day
          </a>
        </button>
        <p className="description-p">
          To Do To Day: A fun To Do list app. When I came up with the idea I
          wanted a simple, playful to do list that I would actually use each
          day. My idea was chosen by a team for final project at Dev, it was a
          fantastic team experience to bring it to life.
        </p>
        <button className="buttons">
          <a>Apprendre Le Francais (coming soon)</a>
        </button>
        <p className="description-p">
          Apprendre Le Francais: A personal ongoing project! I'm off to france
          until November 28th and I want to learn french. I also want to keep
          coding, so I created Apprendre le Francais so I can learn not just
          french but coding languages as well. On this app you can imput what
          you learn ad well as testing yourself on your ever growing french.
          Check it out!
        </p>
      </div>
    </>
  )
}

export default App
