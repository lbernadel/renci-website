import React, { Fragment, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { NewsList } from '../components/news'
import { ArrowLink, LinkTray } from '../components/link'
import { PeopleList } from '../components/people'
import { OrganizationsList } from '../components/organizations'
import { List } from '../components/list'

export default ({ data, pageContext }) => {
  const { collaborationsYaml: {
    name,
    description,
    renciRole,
    members,
    www,
    projects,
    featuredImage,
    partners,
    funding,
    news,
  }} = data

  const [currentProjects, setCurrentProjects] = useState([])
  const [pastProjects, setPastProjects] = useState([])

  const sortedPartners = partners ? [...partners].sort((p, q) => p.name > q.name ? 1 : -1) : null
  const sortedFunders = funding ? [...funding].sort((f, g) => f.name > g.name ? 1 : -1) : null
  const sortedNews = news ? [...news].sort((a, b) => new Date(b.frontmatter.publishDate) - new Date(a.frontmatter.publishDate)) : null

  useEffect(() => {
  if (projects) {
    setCurrentProjects(projects.filter(project => !project.archived))
    setPastProjects(projects.filter(project => project.archived))
  }
  }, [projects])

  return (
  <Fragment>
    <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
      <Title>{ name }</Title>
      <Paragraph>{ description }</Paragraph>
    </Hero>

    <Container>
      <LinkTray urls={ www } />

      {
        sortedNews && (
          <Section title="News">
            <NewsList articles={ news.slice(0, 2) } />
          </Section>
        )
      }

      {
        <Section title="RENCI's Role">
          <div dangerouslySetInnerHTML={{ __html: renciRole }} />
        </Section>
      }

      {
        projects && (
          <Section title="Projects">
            {
              currentProjects.length > 0 && (
                <Article>
                  <List items={ currentProjects.map(project => <ArrowLink key={ project.id } to={ project.fields.path } text={ project.name } />) } />
                </Article>
              )
            }
            {
              pastProjects.length > 0 && (
                <Article title="Past Projects">
                  <List items={ pastProjects.map(project => <ArrowLink key={ project.id } to={ project.fields.path } text={ project.name } />) } />
                </Article>
              )
            }
          </Section>
        )
      }

      {
        (members || sortedPartners || sortedFunders) && (
          <Section title="Contributors">
            {
              members && (
                <Article title="RENCI Team">
                  <PeopleList members={ members } />
                </Article>
              )
            }
            {
              sortedPartners && (
                <Article title="Partners">
                  <OrganizationsList contributors={ sortedPartners } />
                </Article>
              )
            }
            {
              sortedFunders && (
                <Article title="Funding">
                  <OrganizationsList contributors={ sortedFunders } />
                </Article>
              )
            }
          </Section>
        )
      }
    
    </Container>
  </Fragment>
  )
}


export const collaborationQuery = graphql`
  query($id: String!) {
    collaborationsYaml( id: { eq: $id }) {
      name
      description
      renciRole
      www
      members {
        id
        fullName
        role
        fields {
          path
        }
        photo {
          childImageSharp {
            fixed(width: 350, height: 350) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      featuredImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      partners {
        name
        url
      }
      funding {
        name
        url
      }
      projects {
        id
        name
        archived
        fields {
          path
        }
      }
      news {
        id
        fields {
          path
          newsType
        }
        frontmatter {
          title
          publishDate(formatString: "MMMM DD, YYYY")
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          previewImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt(pruneLength: 500)
      }
    }
  }
`
