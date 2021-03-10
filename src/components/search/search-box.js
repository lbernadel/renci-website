import React from 'react'
import styled from 'styled-components'
import { SearchBox as AlgoliaSearchBox, PoweredBy } from 'react-instantsearch-dom'

const Wrapper = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  align-content: stretch;
  align-items: flex-end;
  .ais-SearchBox {
    width: 100%;
  }
  .ais-SearchBox-form {
    margin: 0;
    position: relative;
  }
  .ais-SearchBox-input {
    width: 100%;
    font-size: 225%;
    padding: ${ theme.spacing.medium } 0;
    color: ${ theme.color.darkgrey };
    outline: none;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: ${ theme.color.grey };
    transition: border-color 250ms;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    &::placeholder {
      color: ${ theme.color.lightgrey };
    }
    &:focus::placeholder {
      opacity: 0.25;
    }
    &:focus, &:hover {
      border-color: ${ theme.color.black };
    }
  }
  .ais-SearchBox-submit { display: none; }
  .ais-SearchBox-reset {
    position: absolute;
    border: 0;
    right: 0;
    top: 50%;
    background-color: transparent;
    cursor: pointer;
  }
  .ais-PoweredBy {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 6px;
    opacity: 0.33;
    transform-origin: 100% 50%;
    transform: scale(0.66);
    transition: opacity 250ms;
  }
  .ais-PoweredBy:hover {
    opacity: 1;
  }
`)

export const SearchBox = () => {
  return (
    <Wrapper>
      <AlgoliaSearchBox
        autoFocus={ true }
        translations={{
          submitTitle: 'Search',
          resetTitle: 'Reset',
          placeholder: 'Search RENCI',
        }}
        searchAsYouType={ false }
      />
      <PoweredBy />
    </Wrapper>
  )
}

// export const SearchBox = connectSearchBox(SearchForm)
