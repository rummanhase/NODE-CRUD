const fs = require('fs/promises')
const path = require('path')

const filename = path.join(__dirname,'/file.txt') ;
const fileContent = 'Hello World from Rumman'
const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.writeFile(filename , fileContent)
}


const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(filename)
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(filename , fileContent)
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(filename)
}



module.exports = { myFileWriter, myFileUpdater,myFileReader , myFileDeleter}
