// Node Requires
const fs = require('fs')
const readline = require('readline')

// External Requires
const JSONStream = require('JSONStream')
const es = require('event-stream')

// reads json file and resolves into a array of profiles
read = (filePath) => {
  if (!filePath || !isFileExist(filePath)) {
    throw new Error(`Invalid filePath, filePath must be one of type string, Buffer, or URL. Received: ${filePath}`)
  }

  return new Promise((resolve, reject) => {
    let profiles = []

    createJsonReadStream(filePath)
      .pipe(es.mapSync((profile) => {
        profiles.push(profile)
      }))
      .on('close', () => {
        resolve(profiles)
      })
  })
}

write = (filePath, data) => {
  if (!filePath) {
    throw new Error(`Invalid filePath, filePath must be one of type string, Buffer, or URL. Received: ${filePath}`)
  }

  if (isFileExist(filePath)) {
    fs.truncate('/path/to/file', 0, () => {})
  }

  let json = JSON.stringify(data, null, 4)

  fs.writeFile(filePath, json, 'utf8', (err) => {
    if (err) {
      console.error(err)

      return
    }

    console.log(`Wrote to file: ${filePath}`)
  })
}

isFileExist = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, fileInfo) => {
      if (fileInfo && fileInfo.isFile()) {
        resolve(true)
      } else {
        reject(false)
      }
    })
  })
}

createJsonReadStream = (filePath) => {
  let stream = fs.createReadStream(filePath, { encoding: 'utf8' })
  let parser = JSONStream.parse('profiles.*')

  return stream.pipe(parser)
}

module.exports = { read, write }
