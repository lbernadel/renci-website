import React, { Fragment } from "react"
import styled from 'styled-components'
import { SEO } from '../components/seo'
import { Link } from 'gatsby'
import { Container, Section } from '../components/layout'
import { Paragraph } from '../components/typography'
import { useNews } from '../hooks'
import { NewsList } from '../components/news'
import { Icon } from '../components/icon'
import { CollaborationsNetwork } from '../components/viz'

const LearnMoreLink = styled(Link)(({ theme }) => `
  position: absolute;
  right: 1rem;
  top: 1rem;
  background-color: ${ theme.color.lightgrey };
  color: ${ theme.color.dark };
  padding: ${ theme.spacing.extraSmall } ${ theme.spacing.small };
  border-radius: ${ theme.border.radius };
  font-size: 75%;
  filter: opacity(0.25);
  transition: filter 250ms;
  display: inline-flex;
  flex-direction: row;
  gap: ${ theme.spacing.small };
  align-items: center;
  text-decoration: none;
`)

const VizWrapper = styled.div(({ theme }) => `
  display: flex;
  justify-content: center;
  backgroundColor: transparent;
  position: relative;
  margin-top: -1rem;
  margin-bottom: -15rem;
  &:hover ${ LearnMoreLink } {
    filter: opacity(0.75);
  }
`)

const Overlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(to bottom, transparent 66%, white 100%);
  pointer-events: none;
`

const Tagline = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 15%;
  font-size: 300%;
  line-height: 1.5;
  font-weight: bold;
  color: #222;
  max-width: 1000px;
  margin: auto;
  pointer-events: none;
`

const Visualization = () => {
  return (
    <VizWrapper>
      <CollaborationsNetwork />
      <Overlay />
      <Tagline>
        We do<br />
        Data Science
      </Tagline>
      <LearnMoreLink to="/home-viz"><Icon icon="question" size={ 16 } /> <span>Explore this graphic</span></LearnMoreLink>
    </VizWrapper>
  )  
}

const IndexPage = () => {
  const { spotlight }= useNews()

  return (
    <Fragment>
      <SEO title="Home" />

      <Container>
        <Visualization />
      </Container>

      <Container>
        <Section title="News Spotlight" fullWidth>
          <NewsList articles={ spotlight } />
        </Section>

        <Section title="Sit amet, consectetur">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ex sapiente excepturi blanditiis veniam debitis non ratione minus, sit quae. Quae ut reiciendis soluta eveniet corporis nisi obcaecati excepturi, accusantium!
          </Paragraph>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus labore, dolorem sunt mollitia voluptate illo quas minima porro voluptatum voluptates eos molestiae error cupiditate recusandae velit quisquam molestias est praesentium, quod necessitatibus consequuntur veritatis? Laborum cupiditate, repudiandae libero nobis dignissimos unde, modi qui totam rem impedit nam illum cumque.
          </Paragraph>
        </Section>
      </Container>
    </Fragment>
  )
}

export default IndexPage
