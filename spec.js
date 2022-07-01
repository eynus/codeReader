// use-cac
const cli = require('cac')()

cli.command('rm <dir>', 'remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log('remove ' + dir + (options.recursive ? ' recursively' : ''));//eynus

  })


// -h --help
cli.help()
//-v --version

cli.parse()