const query = `query GithubRepoSearch ($query: String!){
  search(first: 10, query: $query, type: REPOSITORY) {
    edges {
      node {
        ... on Repository {
          nameWithOwner
          url
          languages (first: 1) {
            edges {
              node {
                name
              }
            }
          }
          releases (last: 1) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}`

const variables = (queryString) => {
  return `{
    "query": "${queryString}"
  }`
}

export {
  query,
  variables
}
