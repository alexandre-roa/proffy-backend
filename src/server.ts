import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)

app.listen(8080)

//app.use(cors())

//GET: Obeter uma informação
//POST: Registrar uma nova informção
//PUT: Atualizar uma informação já existente
//DELETE: Deletar uma informação já existente

//BODY = Corpo da requisição
//Route Params: indentifica qual recurso quremos atualizar
//Query Params: Paginação, filtros, ordenação.


