import './skills.css'
import { useEffect, useState } from 'react'
import data from './Data.json'

function Skills(){
    const [skills, setSkills] = useState([])
    const url = 'https://raw.githubusercontent.com/kavtelishvilidemetre-creator/Portholio/refs/heads/main/portholio-progect/src/skills/Data.json'
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
    .then(data => {
        setSkills(data)
        console.log(data)
    })
    }, [])
    

    return(
        <>
            
           <div className="skills">
               {
               
                   skills.map((skill)=>(
                       <div key={skill.id}>
                           {skill.name}
                           <img src={skill.img} alt={skill.name} onClick={() => console.log(skill.name)}/>
                       </div>
                   ))
                }
           </div>
        </>
    )
}
export default Skills
