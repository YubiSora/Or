const fetch = require('node-fetch')
const { default: Axios } = require('axios')
const fs = require('fs')
let BodyForm = require('form-data')
const FormData = require('form-data')
const { fromBuffer } = require('file-type')

const uptotele = async (media) => new Promise(async (resolve, reject) => {
	try {
		let { ext } = await fromBuffer(media)
		console.log('Jangan lupa subscribe YT : ZEEONE OFC')
		let form = new FormData()
		form.append('file', media, 'tmp' + ext)
		await fetch('https://telegra.ph/upload', {
			method: 'POST',
			body: form
		})
		.then(res => res.json())
		.then(res => {
			if (res.error) return reject(res.error)
			resolve('https://telegra.ph' + res[0].src)
			console.log('Ntar Eror Klo Gk Sub')
		})
		.catch(err => reject(err))
	} catch (e) {
		return console.log(e)
	}
})
const uploadFile = async (buffer) => {
  const { ext } = await fromBuffer(buffer) || {}
  let form = new FormData
  form.append('file', buffer, 'tmp' + ext)
  let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
    method: 'POST',
    body: form
  })
  let json = await res.json()
  if (!json.success) throw json
  return json.link
}

const RESTfulAPI = async (inp) => {
  let form = new FormData
  let buffers = inp
  if (!Array.isArray(inp)) buffers = [inp]
  for (let buffer of buffers) {
    form.append('file', buffer)
  }
  let res = await fetch('https://storage.restfulapi.my.id/upload', {
    method: 'POST',
    body: form
  })
  let json = await res.text()
  try {
    json = JSON.parse(json)
    if (!Array.isArray(inp)) return json.files[0].url
    return json.files.map(res => res.url)
  } catch (e) {
    throw json
  }
}

const uploadImages = (buffData, type) => {
    return new Promise(async (resolve, reject) => {
        const { ext } = fromBuffer(buffData)
        const filePath = 'stik' + ext
        fs.writeFile(filePath, buffData, { encoding: 'base64' }, (err) => {
            if (err) return reject(err)
            console.log('Jangan lupa subscribe YT : ZEEONE OFC')
            const fileData = fs.readFileSync(filePath)
            const form = new FormData()
            form.append('file', fileData, 'tmp' + ext)
            fetch('https://telegra.ph/upload', {
                method: 'POST',
                body: form
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) return reject(res.error)
                resolve('https://telegra.ph' + res[0].src)
            })
            .then(() => fs.unlinkSync(filePath))
            .catch(err => reject(err))
        })
    })
}

const bytesToSize = (bytes) => {
    return new Promise((resolve, reject) => {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        if (bytes === 0) return 'n/a';
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
        if (i === 0) resolve(`${bytes} ${sizes[i]}`);
        resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
    });
  };
 
const TelegraPh = (Path) =>{
	return new Promise (async (resolve, reject) => {
		console.log('Jangan lupa subscribe YT : ZEEONE OFC')
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

  
exports.TelegraPh = TelegraPh
exports.bytesToSize = bytesToSize
exports.RESTfulAPI = RESTfulAPI
exports.uploadImages = uploadImages
exports.uptotele = uptotele
exports.uploadFile = uploadFile