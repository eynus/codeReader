// use-cac
const cli = require('cac')()

cli.option('--type <type>', 'Choose a project type', {
  default: 'node',
})
cli.option('--name <name>', 'Project your name')

cli.command('lint [...files]', 'Lint files').action((files, options) => {
  console.log(files, options, '.............？')
})
// -h --help
cli.help()
//-v --version
cli.version('0.0.0')

cli.parse()