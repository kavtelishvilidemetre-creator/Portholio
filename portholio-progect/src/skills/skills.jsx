import './skills.css'
import { use, useEffect, useState } from 'react'
import data from './Data.json'

function Skills(){
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const url = 'https://raw.githubusercontent.com/kavtelishvilidemetre-creator/Portholio/refs/heads/main/portholio-progect/src/skills/Data.json'
    useEffect(() => {
        setLoading(true);
        fetch(url)
        .then(res => res.json())
    .then(data => {
      setSkills(data);
      setLoading(false);
    });
    }, [])
    

    return(
        <>
        <h1>my skills</h1>
        {loading ? <h2 className="loading">Loading...</h2> : null}
           <div className="skills">
                     {skills.map((skill) => (
        <div key={skill.id}>
          <p>{skill.name}</p>
          <img src={skill.img} alt={skill.name} />
        </div>
      ))}
           </div>
        </>
    )
}
export default Skills
