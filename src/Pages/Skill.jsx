import React from 'react'
import SkillCard from '../Components/SkillCard'

const Skill = ({ onOpenProfile }) => {
  return (
    <div id='skill'>
      <SkillCard onOpenProfile={onOpenProfile} />
    </div>
  )
}

export default Skill
