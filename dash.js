// use-cac
const cli = require('cac')()

cli.command('dev', 'Start dev serve')
  .option('--clear-screen', 'Clear screen')
  .action((options) => {
    console.log(options.clearScreen);//eynus

  })
cli.command('deploy <folder>', 'Deploy a folder to AWS')
  .option('--scale [level]', 'Scaling level')
  .action((folder, options) => {
    // console.log(options.clearScreen);//eynus

  })
cli.command('build [project]', 'Build a project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    // console.log(options.clearScreen);//eynus

  })

cli
  .command('build <entry> [...otherFiles]', 'Build your app')
  .option('--foo', 'Foo option')
  .action((entry, otherFiles, options) => {
    //回车后出现在屏幕上的东西
    console.log(entry)
    console.log(otherFiles)
    console.log(options)
  })

cli.help()

cli.parse()