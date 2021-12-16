const chalk = require('chalk')
const boxen = require('boxen')

const printHelpLog = () => {
  const logs = ` 
    ${chalk.blue.inverse(`<< Experience Builder >>`)}
    ${chalk.red(`A modern way to build websites.`)}

    ${chalk.dim('--help')}  : ${chalk.green('shows help')}
    ${chalk.dim('--create')}: ${chalk.green(
    'helps to create widgets/project/component'
  )}
    ${chalk.dim('--bundle')}: ${chalk.green(
    'helps to bundle the packages/widgets/jsdk'
  )}
    ${chalk.dim('--path')}  : ${chalk.green(
    'sets path for project/widget/package'
  )}
    ${chalk.dim('--zip')}   : ${chalk.green(
    'bundle & zips the packages/widgets'
  )}`

  const view = boxen(logs, {
    borderColor: 'grey',
    padding: 1,
    borderStyle: 'classic',
  })
  console.log(view)
}

const printErrorLog = msg => {
  const logs = ` 
    ${chalk.blue.inverse(`<< Error Found: >>`)}
    ${chalk.red(msg)}
    `
  const view = boxen(logs, {
    borderColor: 'red',
    padding: 1,
    borderStyle: 'classic',
  })
  console.log(view)
}

const printExampleLog = (taskType, errorMsg = '') => {
  const logs = ` 
    ${chalk.blue.inverse(`<< Experience Builder >>`)}
    ${chalk.red(errorMsg)}
  `
  const examples = {
    create: `
    ${chalk.grey(`## create commands`)}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--create')} ${chalk.green(
      'widget=WidgetName'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--create')} ${chalk.green(
      'project=ProjectName'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--create')} ${chalk.green(
      'component=ComponentName'
    )}
    `,
    zip: `
    ${chalk.grey(`## bundling & zipping commands`)}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'widgets'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'widgets=WidgetName'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'widgets=WidgetName1,WidgetName2'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'widgets'
    )} ${chalk.whiteBright('--path=./xyz/abc')}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'packages'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--zip')} ${chalk.green(
      'packages=exblibs'
    )}
    `,
    bundle: `
    ${chalk.grey(`## bundling commands`)}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--bundle')} ${chalk.green(
      'jsdk=ComponentView'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--bundle')} ${chalk.green(
      'widget=WidgetName'
    )}
    ${chalk.yellow('xb')} ${chalk.whiteBright('--bundle')} ${chalk.green(
      'packages=PackageName'
    )}
   `,
  }

  const msg =
    logs +
    (taskType === 'all'
      ? examples.create + examples.bundle + examples.zip
      : examples[taskType])

  const view = boxen(msg, {
    borderColor: 'red',
    padding: 1,
    borderStyle: 'classic',
  })
  console.log(view)
}

module.exports = {
  printHelpLog,
  printErrorLog,
  printExampleLog,
}
