import React from 'react'

export const CollaborationResult = ({ hit }) => {
  return (
    <div>
      <h3>{ hit.name }</h3>
      <div>{ hit.description }</div>
    </div>
  )
}
