module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true
  },
  projects: [
    './',
    {
      package: './package.json'
    }
  ]
}