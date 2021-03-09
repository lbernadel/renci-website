import React from 'react'

export const NewsResult = ({ hit }) => {
  return (
    <div>
      <h3>{ hit.frontmatter.title }</h3>
      <div>{ hit.excerpt }</div>
    </div>
  )
}
