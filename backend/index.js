const express = require(`express`)

const app = express()

app.get(`/`, (request, response) => {
  return response.json({
    evento: `evento OmniStack 11.0`,
    aluno: `Wesley`
  })
})

app.listen(3333)