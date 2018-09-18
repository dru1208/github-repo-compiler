const regexVersion = /(\d+\.){1,2}\d+/


const processRepository = (repository) => {
  const languages = repository.node.languages.edges
  const releases = repository.node.releases.edges

  const primaryLanguage = languages[0] ? languages[0].node.name : "-"
  const recentReleaseTag = releases[0] && releases[0].node.name.match(regexVersion) ?
  `v${repository.node.releases.edges[0].node.name.match(regexVersion)[0]}` : "-"

  return {
    name: repository.node.nameWithOwner,
    language: primaryLanguage,
    latest_tag: recentReleaseTag
  }
}

const processRepositories = (repositories) => repositories.map(processRepository)

export default processRepositories