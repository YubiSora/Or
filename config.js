const fs = require('fs')
const chalk = require('chalk')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

// Website Api
global.APIs = {
	alfa: 'https://apiorca.herokuapp.com/',
	zeks: 'https://zeks.me',
}

// Free apikey
global.APIKeys = {
	'https://apiorca.herokuapp.com/': 'OrcaBot',
	'https://zeks.me': 'OrcaBot',
}

global.owner = ['6289674545497','62895613027623']
global.packname = setting.botname
global.author = setting.ownername
global.alphaVersion = [2, 2143, 3]

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright("Update 'config.js'"))
	delete require.cache[file]
	require(file)
})
