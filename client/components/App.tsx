// import { useFruits } from '../hooks/useFruits'

function App() {
  //   const { data } = useFruits()
  const linkedUrlLinkedin = `https://www.linkedin.com/in/storm-harris-studdart-803930208/`
  const linkedUrlGitHub = `https://github.com/StormHS?tab=repositories`
  const linkedUrlApprendre = `https://github.com/StormHS/Apprendre-le-Francais/tree/main`
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
              >
                LinkedIn
              </a>
            </button>
            <button className="buttons">
              <a
                style={{ textDecoration: 'none', color: 'whitesmoke' }}
                href={linkedUrlGitHub}
              >
                GitHub
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="projects">
        <h2>Current Projects:</h2>
        <button className="buttons">
          <a
            style={{ textDecoration: 'none', color: 'whitesmoke' }}
            href={linkedUrlToDo}
          >
            To Do To Day
          </a>
        </button>
        <button className="buttons">
          <a
            style={{ textDecoration: 'none', color: 'whitesmoke' }}
            href={linkedUrlApprendre}
          >
            Apprendre Le Francais
          </a>
        </button>
      </div>
    </>
  )
}

export default App
