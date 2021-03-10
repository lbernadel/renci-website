import React, { Fragment } from 'react'
import { Section } from '../layout'
import styled from 'styled-components'
import { connectStateResults, Hits, Index } from 'react-instantsearch-dom'
import { CollaborationResult, GroupResult, NewsResult, PersonResult, ProjectResult } from './result'

const StyledHits = styled(Hits)`
  & ul {
    list-style-type: none;
    margin: 0;
  }
`

export const SearchResults = connectStateResults(({ searchState }) =>
  searchState && searchState.query ? (
    <Fragment>
      <Section title="People">
        <Index indexName="PEOPLE">
          <StyledHits hitComponent={ PersonResult } />
        </Index>
      </Section>

      <Section title="Groups">
        <Index indexName="GROUPS">
          <StyledHits hitComponent={ GroupResult }/>
        </Index>
      </Section>

      <Section title="Collaborations">
        <Index indexName="COLLABORATIONS">
          <StyledHits hitComponent={ CollaborationResult }/>
        </Index>
      </Section>

      <Section title="Projects">
        <Index indexName="PROJECTS">
          <StyledHits hitComponent={ ProjectResult }/>
        </Index>
      </Section>

      <Section title="News">
        <Index indexName="NEWS">
          <StyledHits hitComponent={ NewsResult } />
        </Index>
      </Section>

      <Section title="Blog">
        <Index indexName="NEWS">
          <StyledHits hitComponent={ NewsResult } />
        </Index>
      </Section>
    </Fragment>
  ) : null
)