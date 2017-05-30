import { log } from 'console'
import * as express from 'express'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import { getStyles } from 'typestyle'
import { App } from './app'

export const renderPage = ({ html, css }: { html: string, css: string }): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width">
  <style id="styles-target">${css}</style>
  <title>Experimenting with TypeStyle</title>
</head>
<body>
  <div id="root">${html}</div>
</body>
</html>
`

const app = express()
const PORT = 3000
app.use( express.static('public') )
app.get('/', (_, res) => {
  const html = ReactDOMServer.renderToStaticMarkup(<App />)
  const css = getStyles()
  res.send( renderPage({ html, css }) )
})
app.listen(PORT, () => {
  log(`Server listening on localhost:${PORT}`)
})
