import { useState } from 'react'
import './App.css'
import AddWorker from "./components/Workers1/AddWorker"
import WorkerList from './components/Workers1/WorkerList'


function App() {
  const [workers,setWorkers] = useState([])
  return (
    <>
    <div className="App">
      <h1 className='text-white text-center mt-6 text-3xl'>Maaş Otomasyonu</h1>
    <AddWorker setWorkers={setWorkers}/>
    <WorkerList workers={workers} setWorkers = {setWorkers}/>

    </div>
    </>
  )
}

export default App
