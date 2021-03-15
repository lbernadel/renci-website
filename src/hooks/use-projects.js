import { graphql, useStaticQuery } from 'gatsby'

const projectsQuery = graphql`{
  projects: allProjectsYaml {
    edges {
      node {
        id
        name
        description
        www
        fields {
          path
        }
        group {
          id
        }
      }
    }
  }
}`

export const useProjects = () => {
  const { projects } = useStaticQuery(projectsQuery)
  return projects.edges.map(({ node }) => node)
}
