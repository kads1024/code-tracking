import React from 'react'

const ProjectLayout = ({name, description, date, demoLink}) => {
  return (
    <div className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6'>
        {name}
    </div>
  )
}

export default ProjectLayout