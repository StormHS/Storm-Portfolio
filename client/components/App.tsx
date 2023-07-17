// import { useFruits } from '../hooks/useFruits'

function App() {
  //   const { data } = useFruits()
  const linkedUrlLinkedin = `https://www.linkedin.com/in/storm-harris-studdart-803930208/`

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
          </div>
        </div>
        <button>
          <a href={linkedUrlLinkedin} className="buttons">
            LinkedIn
          </a>
        </button>{' '}
        <button className="buttons">Github</button>
        <h2>Current Projects</h2>
        <button className="buttons">Apprendre Le Français</button>
        <button className="buttons">To Do To Day</button>
        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
    </>
  )
}

export default App
