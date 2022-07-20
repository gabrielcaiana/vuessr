import express from 'express'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'

const server = express()

server.get('/menu', (req, res) => {
  const app = createSSRApp({
    data: () => ({ count: 1 }),
    template: `
    <h1>Petlove menu</h1>

    <ul>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
        <li>item 4</li>
    </ul>
    `
  })

  renderToString(app).then((html) => {
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Menu SSR</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
    `)
  })
})


server.listen(3000, () => {
  console.log('ready')
})

app.mount('#app')