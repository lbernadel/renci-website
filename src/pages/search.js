import React from 'react'
import { Container } from '../components/layout'
import { SEO } from '../components/seo'
import { Title, Heading } from '../components/typography'
import algoliasearch from 'algoliasearch/lite'
import { Hits, Index, InstantSearch, SearchBox } from 'react-instantsearch-dom'
import { CollaborationResult, GroupResult, NewsResult, PersonResult, ProjectResult } from '../components/search'

const searchClient = algoliasearch('XU4L9VFUC9', 'a684a96c762d601cf1b43c9e5ec28029')

const SearchPage = () => (
  <Container>
    <SEO title="404: Not found" />

    <Title>Search</Title>

    <InstantSearch searchClient={ searchClient } indexName="NEWS">
      <SearchBox />

      <Index indexName="PEOPLE">
        <Heading>People</Heading>
        <Hits hitComponent={ PersonResult } />
      </Index>

      <Index indexName="GROUPS">
        <Heading>Groups</Heading>
        <Hits hitComponent={ GroupResult } />
      </Index>

      <Index indexName="COLLABORATIONS">
        <Heading>Collaborations</Heading>
        <Hits hitComponent={ CollaborationResult }/>
      </Index>

      <Index indexName="PROJECTS">
        <Heading>Projects</Heading>
        <Hits hitComponent={ ProjectResult }/>
      </Index>

      <Index indexName="NEWS">
        <Heading>News</Heading>
        <Hits hitComponent={ NewsResult } />
      </Index>

      <Index indexName="NEWS">
        <Heading>Blog</Heading>
        <Hits hitComponent={ NewsResult } />
      </Index>

    </InstantSearch>

  </Container>
)

export default SearchPage
