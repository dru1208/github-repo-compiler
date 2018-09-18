const regexVersion = /(\d+\.){1,2}\d+/

const processRepository = (repository) => ({
  name: repository.node.nameWithOwner,
  language: repository.node.languages.edges.length !== 0 ? repository.node.languages.edges[0].node.name : "-",
  latest_tag: repository.node.releases.edges.length !== 0 ? `v${repository.node.releases.edges[0].node.name.match(regexVersion)[0]}` : "-"
})

const processRepositories = (repositories) => repositories.map(processRepository)

export default processRepositories