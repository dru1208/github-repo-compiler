const regexVersion = /(\d+\.){1,2}\d+/

// const processRepository = (repository) => ({
//   name: repository.node.nameWithOwner,
//   language: repository.node.languages.edges.length !== 0 ? repository.node.languages.edges[0].node.name : "-",
//   latest_tag: (repository.node.releases.edges.length !== 0 && repository.node.releases.edges[0].node.name.match(regexVersion)) ?
//   `v${repository.node.releases.edges[0].node.name.match(regexVersion)[0]}` : "-"
// })


const processRepository = (repository) => {
  const languages = repository.node.languages.edges
  const releases = repository.node.releases.edges

  const primaryLanguage = languages.length !== 0 ? languages[0].node.name : "-"
  const recentReleaseTag = releases.length !== 0 && releases[0].node.name.match(regexVersion) ?
  `v${repository.node.releases.edges[0].node.name.match(regexVersion)[0]}` : "-"

  return {
    name: repository.node.nameWithOwner,
    language: primaryLanguage,
    latest_tag: recentReleaseTag
  }
}

const processRepositories = (repositories) => repositories.map(processRepository)

export default processRepositories