import * as ws from 'ws'
import { RpcHost } from './rpc-host'
import { ServerApi } from './server-api'

const server = new ws.Server({ port: 5000 })
server.on('connection', async (socket: ws) => {
  const rh = new RpcHost(socket)
  rh.addEndpoint('server-api', new ServerApi())

  socket.on('close', () => {
    server.close()
  })
})
