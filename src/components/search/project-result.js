import React from 'react'

export const ProjectResult = ({ hit }) => {
  return (
    <div>
      <h3>{ hit.name }</h3>
      <div>{ hit.description }</div>
    </div>
  )
}
