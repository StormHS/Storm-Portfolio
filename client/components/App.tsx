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
            <button className="buttons">CV</button>
            <button className="buttons">
              <a href={linkedUrlLinkedin}>LinkedIn</a>
            </button>
            <button className="buttons">
              <a href={linkedUrlGitHub}>GitHub</a>
            </button>
          </div>
        </div>
      </div>

      <h2>Current Projects</h2>
      <button className="buttons">
        <a href={linkedUrlToDo}>To Do To Day</a>
      </button>
      <button className="buttons">
        <a href={linkedUrlApprendre}>Apprendre Le Francais</a>
      </button>
    </>
  )
}

export default App
