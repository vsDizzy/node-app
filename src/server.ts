import * as ws from 'ws'
import { SocketHost } from './rpc-host'
import { ServerApi } from './server-api'

const server = new ws.Server({ port: 5000 })
server.on('connection', async (socket: ws) => {
  const rh = new SocketHost(socket)
  rh.addEndpoint('server-api', new ServerApi())

  socket.on('close', () => {
    server.close()
  })
})
