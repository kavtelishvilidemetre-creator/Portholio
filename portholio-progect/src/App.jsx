import Header from './header/header.jsx'
import './App.css'
import Skills from "./skills/skills.jsx"
import { use } from 'react'

function App() {
  const [dark, setDark] = useState(false)

  return (
    <>
      <Header />
      <h1>My Portfolio</h1>
      <Skills />
    </>
  )
}

export default App
