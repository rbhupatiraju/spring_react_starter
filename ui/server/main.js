const path = require("path")
let express = require("express")
let fs = require('fs')
let router = express.Router()
let app = express()
const devMiddleware = require("webpack-dev-middleware")
let webpack = require('webpack')
let config = require('../config/webpack.dev.js')

let ctxtRoot = process.argv[2]
if(!ctxtRoot) {
    /* eslint-disable no-console */
    console.error('Error!')
    console.error('Must pass context root as second arg: node server.js <MyContextRoot>')
    process.exit()
} else if (ctxtRoot.startsWith('/')) {
    ctxtRoot = ctxtRoot.substr(1);
}

process.env.CONTEXT_ROOT = ctxtRoot

let baseURL = `http://localhost:8080/${ctxtRoot}`

let url = require('url')
function getOptions(proxyUrl) {
    let options = url.parse(proxyUrl)
    options.cookieRewrite = true
    return options
}
let compiler = webpack(config)

app.use(devMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: false,
    stats: {
        colors: true,
        chunks: false
    },
    watchOptions: {
        aggregateTimeout: 1000,
        poll: true
    }
}))

app.use(require('webpack-hot-middleware')(compiler))

let proxy = require('proxy-middleware')

router.use('/json', proxy(getOptions(`${baseURL}json`)))
router.use('/api', proxy(getOptions(`${baseURL}api`)))
router.use('/data', proxy(getOptions(`${baseURL}data`)))

app.get('/', (req, res) => {
    res.redirect(`http://localhost:8000/${ctxtRoot}/`)
})

app.use(`/${ctxtRoot}/`, router)

app.use("*", (req, res, next) => {
    const filename = path.join(compiler.outputPath, "index.html")
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) {
            return next(err)
        }
        res.set("content-type", "text/html")
        res.send(result)
        res.end()
        return res
    })
})

app.listen(8000)

/* eslint-disable no-console */
console.log("Navigate to http://localhost:8000")
console.log("in your browser for development.\n")
console.log("Make sure that your tomcat is started on port 8080.\n")
console.log("Service calls will be proxied to ")
console.log(`http://localhost/${ctxtRoot}`)