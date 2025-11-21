import './App.css'
import { app } from './firebase'
import { getDatabase, ref, set } from 'firebase/database'

const db = getDatabase(app)

function App() {
  const putData = () => {
    set(ref(db, "users/1"), {
      id: 1,
      name: "Muhammad Haseeb Amjad",
      age: 21
    })

    alert("Data has been successfully put")
  }

  return (
    <>
      <h1>Connecting Firebase to the React App</h1>
      <button onClick={putData}>Put Data in Realtime Database</button>
    </>
  )
}

export default App
