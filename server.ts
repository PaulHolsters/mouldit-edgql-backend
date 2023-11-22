import * as http from "http";
import backend from './mouldit-backend'

const port = Number(process.env.PORT || 3000)
const server = http.createServer(backend)
server.listen(port)

