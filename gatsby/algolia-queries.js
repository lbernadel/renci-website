const query = `{
  people: allPeopleYaml {
    nodes {
      objectID: id
      fullName
      fields {
        path
      }
    }
  }
  groups: allGroupsYaml(sort: {fields: name, order: ASC}) {
    nodes {
      objectID: id
      name
      fields {
        path
      }
      description
    }
  }
  collaborations: allCollaborationsYaml(sort: {fields: name, order: ASC}) {
    nodes {
      objectID: id
      name
      fields {
        path
      }
      description
    }
  }
  projects: allProjectsYaml(sort: {fields: name, order: DESC}) {
    nodes {
      objectID: id
      name
      fields {
        path
      }
      description
    }
  }
  teams: allTeamsYaml(sort: {fields: name, order: ASC}) {
    nodes {
      objectID: id
      name
      fields {
        path
      }
    }
  }
  news: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content\/news\/features/"}}
  ) {
    nodes {
      objectID: id
      frontmatter {
        title
        subtitle
      }
      fields {
        path
      }
      excerpt
      html
    }
  }
  blog: allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/content\/news\/blog/"}}
  ) {
    nodes {
      objectID: id
      frontmatter {
        title
        subtitle
      }
      fields {
        path
      }
      excerpt
      html
    }
  }
}`

module.exports = [
  {
    query: query,
    transformer: ({ data }) => data.people.nodes,
    indexName: `PEOPLE`
  },
  {
    query: query,
    transformer: ({ data }) => data.groups.nodes,
    indexName: `GROUPS`
  },
  {
    query: query,
    transformer: ({ data }) => data.collaborations.nodes,
    indexName: `COLLABORATIONS`
  },
  {
    query: query,
    transformer: ({ data }) => data.projects.nodes,
    indexName: `PROJECTS`
  },
  {
    query: query,
    transformer: ({ data }) => data.blog.nodes,
    indexName: `BLOG`
  },
]
