import React from 'react'
import styled from 'styled-components'
import { HorizontalRule } from '../layout'
import { Link } from '../link'
import { Subheading } from '../typography'
import { Highlight } from 'react-instantsearch-dom'

const ResultWrapper = styled.article(({ theme }) => `
  display: block;
  transition: filter 250ms;
  margin: 0;
  &:hover {
    background-color: ${ theme.color.whitish };
  }
`)

const ResultTitle = styled(Subheading)`
  margin: 0;
  // font-size: 100%;
  // font-weight: bold;
`

export const PersonResult = ({ hit }) => {
  return (
    <ResultWrapper>
      <ResultTitle>
        <Link to={ hit.fields.path }>{ hit.fullName }</Link>
      </ResultTitle>
    </ResultWrapper>
  )
}

export const GroupResult = ({ hit }) => {
  return (
    <ResultWrapper to={ hit.fields.path }>
      <ResultTitle>
        <Link to={ hit.fields.path }>{ hit.name }</Link>
      </ResultTitle>
    </ResultWrapper>
  )
}

export const CollaborationResult = ({ hit }) => {
  return (
    <ResultWrapper to={ hit.fields.path }>
      <ResultTitle>
        <Link to={ hit.fields.path }>{ hit.name }</Link>
      </ResultTitle>
    </ResultWrapper>
  )
}

export const ProjectResult = ({ hit }) => {
  return (
    <ResultWrapper to={ hit.fields.path }>
      <ResultTitle>
        <Link to={ hit.fields.path }>{ hit.name }</Link>
      </ResultTitle>
    </ResultWrapper>
  )
}

export const NewsResult = ({ hit }) => {
  return (
    <ResultWrapper to={ hit.fields.path }>
      <ResultTitle>
        <Link to={ hit.fields.path }><Highlight attribute="frontmatter.title" hit={ hit } tagName="mark" /></Link>
      </ResultTitle>
      { hit.frontmatter.publishDate }<br/>
      <Highlight attribute="excerpt" hit={ hit } tagName="mark" />
      <HorizontalRule />
    </ResultWrapper>
  )
}

