// import { useFruits } from '../hooks/useFruits'

function App() {
  //   const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1>Storm Harris-Studdart</h1>
        <img
          className="storm-img"
          src="../images/storm.jpg"
          alt="Image of Storm"
        />

        {/* <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul> */}
      </div>
    </>
  )
}

export default App
