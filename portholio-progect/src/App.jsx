import Header from './header/header.jsx'
import './App.css'
import Skills from "./skills/skills.jsx"
function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() =>{
          setIsLoading(true)
          fetch(url)
          .then(res => res.json())
          .then(data => {
              setSkills(data)
              setIsLoading(false) 
          })
    }, [])
  
  return (
    <>
      { 
        isLoading ? <p className='isloading'>Loading...</p> : null
      }
      <Header />
      
      <h1>My Portfolio</h1>
      <Skills />
    </>
  )


export default App
