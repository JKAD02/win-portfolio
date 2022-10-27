import './App.css'
import LockScreen from './components/LockScreen/LockScreen'
import HomeScreen from './components/HomeScreen/HomeScreen'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LockScreen />} />
        <Route path='/homeScreen' element={<HomeScreen />} />
      </Routes>
    </div>
  )
}

export default App
