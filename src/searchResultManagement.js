// used to find major, minor, patch of release tag
const regexVersion = /(\d+\.){1,2}\d+/

// used to transform graphql request information into the right format for the react state
const processRepository = (repository) => {
  const languages = repository.node.languages.edges
  const releases = repository.node.releases.edges


  const name = repository.node.nameWithOwner ? repository.node.nameWithOwner : "-"
  const url = repository.node.url ? repository.node.url : ""
  const primaryLanguage = languages[0] ? languages[0].node.name : "-"
  const recentReleaseTag = releases[0] && releases[0].node.name.match(regexVersion) ?
  `v${repository.node.releases.edges[0].node.name.match(regexVersion)[0]}` : "-"

  return {
    name: name,
    url: url,
    language: primaryLanguage,
    latest_tag: recentReleaseTag
  }
}

const processRepositories = (repositories) => repositories.map(processRepository)

export default processRepositories