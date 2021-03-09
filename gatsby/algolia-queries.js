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
      html
    }
  }
}`

module.exports = [
  {
    query: query,
    indexName: `PEOPLE`,
    transformer: ({ data }) => data.people.nodes,
  },
  {
    query: query,
    indexName: `GROUPS`,
    transformer: ({ data }) => data.groups.nodes,
  },
  {
    query: query,
    indexName: `COLLABORATIONS`,
    transformer: ({ data }) => data.collaborations.nodes,
  },
  {
    query: query,
    indexName: `PROJECTS`,
    transformer: ({ data }) => data.projects.nodes,
  },
  {
    query: query,
    indexName: `NEWS`,
    transformer: ({ data }) => data.news.nodes,
  },
  {
    query: query,
    indexName: `BLOG`,
    transformer: ({ data }) => data.blog.nodes,
  },
]
