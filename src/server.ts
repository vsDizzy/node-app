import { SocketHost } from 'rp-lib/src/socket-host'
import * as ws from 'ws'
import { ServerApi } from './server-api'

const server = new ws.Server({ port: 5000 })
server.on('connection', async (socket: ws) => {
  const rh = new SocketHost(socket)
  rh.addEndpoint('server-api', new ServerApi())

  socket.on('close', () => {
    server.close()
  })
})
