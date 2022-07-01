// use-cac
const cli = require('cac')()

cli.command('dev', 'Start dev serve')
  .option('--clear-screen', 'Clear screen')
  .action((options) => {
    console.log(options.clearScreen);//eynus

  })
