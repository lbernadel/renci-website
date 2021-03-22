import React, { Fragment } from 'react'
import { Section } from '../layout'
import styled from 'styled-components'
import { connectStateResults, Hits, Index } from 'react-instantsearch-dom'
import { CollaborationResult, GroupResult, NewsResult, PersonResult, ProjectResult } from './result'
import { LoadingIndicator } from '../loading-indicator'

const StyledHits = styled(Hits)`
  & ul {
    list-style-type: none;
    margin: 0;
  }
`

const Results = ({ title, indexName, hitComponent }) => {
  return (
    <Section title={ title }>
      <Index indexName={ indexName }>
        <StyledHits hitComponent={ hitComponent }/>
      </Index>
    </Section>
  )
}

export const SearchResults = connectStateResults(({ searchState, searching, allSearchResults }) => {
  console.log(allSearchResults, searching)


  return (
    searchState && searchState.query ? (
      <Fragment key={ allSearchResults.nbhits || 'x' }>
        {
          allSearchResults.PEOPLE.nbHits > 0
          && <Results title="People" indexName="PEOPLE" hitComponent={ PersonResult } />
        }

        {
          allSearchResults.GROUPS.nbHits > 0
          && <Results title="Groups" indexName="GROUPS" hitComponent={ GroupResult } />
        }

        {
          allSearchResults.COLLABORATIONS.nbHits > 0
          && <Results title="Collaborations" indexName="COLLABORATIONS" hitComponent={ CollaborationResult } />
        }

        {
          allSearchResults.PROJECTS.nbHits > 0
          && <Results title="Projects" indexName="PROJECTS" hitComponent={ ProjectResult } />
        }

        {
          allSearchResults.NEWS.nbHits > 0
          && <Results title="News" indexName="NEWS" hitComponent={ NewsResult }  />
        }

      </Fragment>
    ) : null
  )}
)