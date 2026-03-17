import './skills.css'
import { useEffect, useState } from 'react'
import data from './Data.json'

function Skills(){
    const [skills, setSkills] = useState([])
    const url = 'https://raw.githubusercontent.com/kavtelishvilidemetre-creator/Portholio/refs/heads/main/portholio-progect/src/skills/Data.json'
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setSkills(data))
    }, []);
    return(
        <div className="skills">
            {skills.map((skills)=>{
                return (
                <div key={skills.id}>{skills.name}
                    <img src={skills.image} alt={skills.name} />
                    
                    
                </div>

                )
            })}
        </div>
    )
}
export default Skills