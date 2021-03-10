import React from 'react'
import { Container, Section } from '../components/layout'
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { Title, Heading } from '../components/typography'
import algoliasearch from 'algoliasearch/lite'
import { Hits, Index, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { CollaborationResult, GroupResult, NewsResult, PersonResult, ProjectResult } from '../components/search'
import AlgoliaSVG from '../images/search-by-algolia.svg'
const searchClient = algoliasearch('XU4L9VFUC9', 'a684a96c762d601cf1b43c9e5ec28029')

const StyledHits = styled(Hits)`
  & ul {
    list-style-type: none;
    margin: 0;
  }
`

const SearchPage = () => {
  return (
    <Container>
      <SEO title="404: Not found" />

      <Title>Search</Title>

      <InstantSearch searchClient={ searchClient } indexName="NEWS">
        <SearchBox />
        <img src={ AlgoliaSVG } width="100px" />

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

      </InstantSearch>

    </Container>
  )
}

export default SearchPage
